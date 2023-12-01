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
  const [userAction, setUserAction] =
    useState<keyof typeof SpriteActions | undefined>(undefined)
  const spriteRef = useRef<HTMLDivElement>(null)
  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    if (windowWidth === 0) return
    if (x + params.frameWidth < windowWidth) return
    setPosition((prev) => ({ x: windowWidth - params.frameWidth, y: prev.y }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.frameWidth, windowWidth])

  const moveLeft = useCallback(() => {
    setUserAction('LEFT')
    setPosition((prev) => ({ 
      x: prev.x - 15 > 0 ? prev.x - 15 : 0, 
      y: prev.y }))
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [positions])
  
  const moveRight = useCallback(() => {
    setUserAction('RIGHT')
    if (windowWidth === 0) return
    setPosition((prev) => ({ 
      x: prev.x + 15 < (windowWidth - params.frameWidth) ? 
        prev.x + 15 : windowWidth - params.frameWidth, 
      y: prev.y
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [positions, windowWidth, params.frameWidth])

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
    setUserAction('CLICK')
    // updateProps({ ...positions['CLICK'], isLooping: false })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [positions])

  const idle = useCallback(() => {
    setUserAction('IDLE')
    // updateProps({
    //   ...params,
    //   isLooping: true,
    //   currentFrameRow: params.defaultFrameRow || 0,
    //   isFacingLeft: undefined,
    // })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

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

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', (event) => {
      if (disabled) return
      setUserAction(undefined)
      if (event.code !== 'Space') idle()
    })
  }, [disabled, onKeyDown, idle])

  const sprite = (
    <div className="SpritePosition" ref={spriteRef} style={{ left: x, top: y }}>
      <Sprite props={params} positions={positions} position={userAction} />
    </div>
  )

  return { sprite, moveLeft, moveRight, click, idle }
}

export default useSprite
