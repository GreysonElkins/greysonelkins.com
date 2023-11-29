import { Dispatch, RefObject } from "react"
import Character from ".."

import { PositionUpdate, CharacterDirection as A, CharacterAction } from "types/Character.d"

import spritesheet from 'assets/Adventurer Sprite Sheet v2.png'

interface Action extends CharacterAction {
  ref: RefObject<HTMLElement>
}

export const defaultAnimation = { frames: 13, spriteSheetRow: 1 }
export const spaceAnimation = { frames: 6, spriteSheetRow: 11, frame: 0 }
export const rightAnimation = { action: A.RIGHT, isInverted: false, frames: 8, spriteSheetRow: 2 }
export const leftAnimation = { action: A.LEFT, isInverted: true, frames: 8, spriteSheetRow: 2 }

const LilGuy:React.FC<{externalActions?: Action[]}> = ({ externalActions = [] }) => {
  const defaultAnimation = { frames: 13, spriteSheetRow: 1 }

  const onKeyDown = (event: any, reposition: Dispatch<PositionUpdate>) => {
    switch(event.code) {
      case "ArrowRight":
        reposition(rightAnimation)
        break
      case "ArrowLeft":
        reposition(leftAnimation)
        break
      case "Space":
        reposition(spaceAnimation)
        break
      default:
        return reposition(defaultAnimation)
    }
  }

  return <div className="LilGuy">
    <Character 
      spritesheet={spritesheet}
      width={64}
      height={64}
      offsetY={16}
      keylength={150}
      defaultPosition={{
        ...defaultAnimation,
        x: 505,
        y: 23
      }}
      actions={[
        { eventType: 'keydown', isWindowEvent: true, action: onKeyDown },
        { eventType: 'keyup', isWindowEvent: true, action: (e, reposition) => reposition(defaultAnimation) },
        ...externalActions
      ]}
    />
  </div>
}

export default LilGuy
