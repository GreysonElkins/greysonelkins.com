import { 
  useState, 
  useRef, 
  useCallback, 
  useEffect
} from "react"
import { useWindowSize } from "usehooks-ts"
import Sprite from "components/Characters/Sprite"
import { elementsOverlap } from "scripts"

import { SpriteProps, WindowPosition, SpritePositions, Clickables, SpriteActions } from "types/Sprites.d"
import './useSprite.scss'

const initClickables: Clickables[] = []

const useSprite = (
  params: SpriteProps,
  positions: SpritePositions,
  clickables = initClickables,
  disabled?: boolean,
  defaultPosition = { x: 0, y: 0 } as WindowPosition,
) => {
  const [{ x, y }, setPosition] = useState<WindowPosition>(defaultPosition)
  const [action, setAction] = useState<keyof typeof SpriteActions>('IDLE')
  const spriteRef = useRef<HTMLDivElement>(null)
  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    if (windowWidth === 0) return
    if (x + params.frameWidth < windowWidth) return
    setPosition((prev) => ({ x: windowWidth - params.frameWidth, y: prev.y }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.frameWidth, windowWidth])

  useEffect(() => {
    if (!['LEFT', 'RIGHT'].includes(action)) return
    const interval = setInterval(() => {
      if (action === 'LEFT') {
        setPosition((prev) => ({
          x: prev.x - 15 > 0 ? prev.x - 15 : 0,
          y: prev.y,
        }))
      } else if (windowWidth !== 0) {
        setPosition((prev) => ({
          x:
            prev.x + 15 < windowWidth - params.frameWidth
              ? prev.x + 15
              : windowWidth - params.frameWidth,
          y: prev.y,
        }))
      }
    }, 150)
    return () => clearInterval(interval)
  }, [action, params.frameWidth, windowWidth])

  const moveLeft = useCallback(() => {
    setAction('LEFT')
  }, [])
  
  const moveRight = useCallback(() => {
    setAction('RIGHT')
  }, [])

  const click = useCallback(() => {
    let foundClickable = false
    let i = -1
    while (foundClickable === false && i < clickables.length) {
      if (elementsOverlap(spriteRef, clickables[i])) foundClickable = true
      if (!foundClickable) i++
    }
    if (foundClickable) {
      // clickables[i]?.current?.focus()
      clickables[i]?.current?.click()
    }
    setAction('CLICK')
  }, [clickables])

  const idle = useCallback(() => {
    setAction('IDLE')
  }, [])

  const onKeyDown = useCallback(
    (event: any) => {
      if (disabled) return
      switch (event.code) {
        case 'ArrowRight':
          return moveRight()
        case 'ArrowLeft':
          return moveLeft()
        case 'Space':
          return click()
        default:
          return idle()
      }
    },
    [disabled, moveRight, moveLeft, click, idle]
  )

  const onKeyUp = useCallback((event:KeyboardEvent) => {
    if (disabled) return
    if (event.code !== 'Space') idle()
  }, [disabled, idle])

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [disabled, onKeyDown, idle, onKeyUp])

  const sprite = (
    <div className="SpritePosition" ref={spriteRef} style={{ left: x, top: y }}>
      <Sprite props={params} position={positions[action]} setAction={setAction} />
    </div>
  )

  return { sprite, moveLeft, moveRight, click, idle }
}

export default useSprite
