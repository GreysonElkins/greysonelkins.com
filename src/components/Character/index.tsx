import { useEffect, useRef, useReducer, Reducer, Dispatch, RefObject } from 'react'
import Sprite, { Props as SpriteProps } from './Sprite'

import { CharacterPosition, PositionUpdate, CharacterAction } from 'types/Character.d'
import './Character.scss'

interface Props extends Omit<SpriteProps, 'frames'> {
  defaultPosition: PositionUpdate
  actions: CharacterAction[]
}

const positionCharacter = (state: CharacterPosition, {action, ...update}: PositionUpdate) => {
  const updatedState = { ...state }
  if (action === 'LEFT' && updatedState.x !== 0) updatedState.x -= 20 
  if (action === 'RIGHT') updatedState.x += 20 
  Object.keys(update).forEach(key => {
    if (update[key] !== undefined && update[key] !== updatedState[key])
      updatedState[key] = update[key]
  })
  return updatedState
}

const createDefaultPosition = ({ x, y, frames, spriteSheetRow, isInverted, onFinishCycle }: PositionUpdate) => {
  return { 
    x: x || 0, 
    y: y || 0,
    frames: frames || 1, 
    spriteSheetRow: spriteSheetRow || 1, 
    isInverted: isInverted || false,
    currentFrame: !isInverted ? 0 : frames ? frames : 0
  }
}

const Character: React.FC<Props> = ({ 
    actions, 
    defaultPosition, 
    ...props 
}) => {
  // const [{invert, row, frames}, setCurrentAnimation] = useState<AnimationProps>(defaultAnimation)
  const [pos, reposition] = useReducer<Reducer<CharacterPosition, PositionUpdate>>(
    positionCharacter, createDefaultPosition(defaultPosition)
  )
  const sprite = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const events = actions.reduce((evs, animation) => {
      const action = (event: Event) => {
        animation.action(event, reposition)
      }
      if (animation.isWindowEvent) {
        window.addEventListener(animation.eventType, action)
        evs[animation.eventType] = { isWindow: true, action }
      } else {
        const obj = animation.ref || sprite
        console.log({ obj })
        obj.current?.addEventListener(animation.eventType, action)
        evs[animation.eventType] = { isWindow: false, action }
      }
      return evs
    }, {} as { [key: string]: { isWindow: boolean, action: (event: Event) => void } })
    
    return () => {
      Object.keys(events).forEach(act => {
        if (events[act].isWindow) {
          window.removeEventListener(act, events[act].action, false)
        } 
      })
    }
  }, [actions])

  return (
      <div 
        ref={sprite} 
        className="Character"
        style={{ left: pos.x, top: pos.y }}
      >
        <Sprite 
          frames={pos.frames}
          invert={pos.isInverted}
          row={pos.spriteSheetRow}
          {...props}
        />
      </div>
  )
}

export default Character
