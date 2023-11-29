import { 
  useReducer, 
  useState, 
  useRef, 
  useCallback, 
  useEffect, 
  RefObject 
} from "react"
import Sprite, { SpriteProps } from "components/Characters/Sprite"
import { elementsOverlap } from "scripts"

import './useSprite.scss'

type WindowPosition = { x: number, y: number }

export enum SpriteActions {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
//   JUMP = 'JUMP',
  CLICK = 'CLICK'
}

type SpritePositions = {
  [key in keyof typeof SpriteActions]: SpriteUpdate
}

export type Clickables = RefObject<HTMLButtonElement>

const initClickables: Clickables[] = []

interface SpriteUpdate extends Omit<SpriteProps, 'spriteSheet' | 'defaultFrameRow'> {
  frameWidth?: number
  frameHeight?: number
  currentFrameRow: number
}

const updateSprite = (state:SpriteProps, update:SpriteUpdate) => {
  const updatedState = Object.keys(update).reduce((updatedState, u) => {
    if (update[u] !== undefined && update[u] !== updatedState[u])
        updatedState[u] = update[u]
    return updatedState
  }, {...state})
  return {...state, ...updatedState}
}

const useSprite = (
  params: SpriteProps,
  positions: SpritePositions,
  clickables = initClickables
) => {
  const [spriteProps, updateProps] = useReducer(updateSprite, params)
  const [{ x, y }, setPosition] = useState<WindowPosition>({ x: 0, y: 0 })
  const spriteRef = useRef<HTMLDivElement>(null)

  const moveLeft = useCallback(() => {
    updateProps({ ...positions['LEFT'], isFacingLeft: true, isLooping: true })
    setPosition((prev) => ({ x: prev.x - 20, y: prev.y }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const moveRight = useCallback(() => {
    updateProps({ ...positions['RIGHT'], isFacingLeft: false, isLooping: true })
    setPosition((prev) => ({ x: prev.x + 20, y: prev.y }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    updateProps({ ...positions['CLICK'], isLooping: false })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const idle = useCallback(() => {
    updateProps({
      ...params,
      isLooping: true,
      currentFrameRow: params.defaultFrameRow || 0,
      isFacingLeft: undefined,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onKeyDown = useCallback(
    (event: any) => {
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
    [moveRight, moveLeft, click, idle]
  )

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', (event) => {
      if (event.code !== 'Space') idle()
    })
  }, [onKeyDown, idle])

  const sprite = (
    <div className="SpritePosition" ref={spriteRef} style={{ left: x, top: y }}>
      <Sprite {...spriteProps} />
    </div>
  )

  return { sprite, moveLeft, moveRight, click, idle }
}

export default useSprite
