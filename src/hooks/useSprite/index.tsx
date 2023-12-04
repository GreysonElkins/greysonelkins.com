import { 
  useState, 
  useRef, 
  useCallback, 
  useEffect
} from "react"
import { useWindowSize } from "usehooks-ts"
import Sprite from "components/Characters/Sprite"
import { elementSideOverlaps } from "scripts"

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
  const [isFacingLeft, setIsFacingLeft] = useState<boolean>(positions[action].isLeftFacing || false)
  const spriteRef = useRef<HTMLDivElement>(null)
  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    const update = positions[action].isLeftFacing
    if (    
      update !== undefined &&
      positions[action].isLeftFacing !== isFacingLeft
    ) {
        setIsFacingLeft(update)
    }
    //eslint-disable-next-line
  }, [positions[action], action])

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
          x: prev.x - 25 > 0 ? prev.x - 25 : 0,
          y: prev.y,
        }))
      } else if (windowWidth !== 0) {
        setPosition((prev) => ({
          x:
            prev.x + 25 < windowWidth - params.frameWidth
              ? prev.x + 25
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

  const moveUp = useCallback(() => {
    setAction('UP')
  }, [])

  const moveDown = useCallback(() => {
    setAction('DOWN')
  }, [])

  const click = useCallback(() => {
    let foundClickable = false
    let i = -1
    while (foundClickable === false && i < clickables.length) {
      if (elementSideOverlaps(spriteRef, clickables[i], isFacingLeft, params.clickOffset)) foundClickable = true
      // if (elementsOverlap(spriteRef, clickables[i])) foundClickable = true
      if (!foundClickable) i++
    }
    if (foundClickable) {
      // clickables[i]?.current?.focus()
      clickables[i]?.current?.click()
    }
    setAction('CLICK')
  }, [clickables, isFacingLeft, params.clickOffset])

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
        case 'ArrowUp':
          return moveUp()
        case 'ArrowDown':
          return moveDown()
        case 'Space':
          return click()
        default:
          return idle()
      }
    },
    [disabled, moveRight, moveLeft, moveUp, moveDown, click, idle]
  )

  const onKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (disabled) return
      if (positions[action].isLooping !== false) idle()
    },
    [action, disabled, idle, positions]
  )

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
      <Sprite
        props={params}
        position={positions[action]}
        setAction={setAction}
        isFacingLeft={isFacingLeft}
      />
    </div>
  )

  return { sprite, moveLeft, moveRight, click, idle, moveUp, moveDown }
}

export default useSprite
