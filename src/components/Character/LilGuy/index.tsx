import { Dispatch, RefObject } from "react"
import Character from ".."

import { PositionUpdate, CharacterDirection as A, CharacterAction } from "types/Character.d"

import spritesheet from 'assets/Adventurer Sprite Sheet v2.png'

type Props = {
  externalActions?: Action[]
  interactingElements?: Array<{
    elementRef: RefObject<HTMLElement>
  }>
}

interface Action extends CharacterAction {
  ref: RefObject<HTMLElement>,
}

export const defaultAnimation = { frames: 13, spriteSheetRow: 1 }
export const spaceAnimation = { frames: 6, spriteSheetRow: 11, frame: 0 }
export const rightAnimation = { action: A.RIGHT, isInverted: false, frames: 8, spriteSheetRow: 2 }
export const leftAnimation = { action: A.LEFT, isInverted: true, frames: 8, spriteSheetRow: 2 }

const LilGuy:React.FC<Props> = ({ externalActions = [], interactingElements =[] }) => {
  const defaultAnimation = { frames: 13, spriteSheetRow: 1 }

  const isOverElement = (sprite: RefObject<HTMLDivElement>) => {
    let overlappedElement: false | number = false 

    interactingElements.forEach(({ elementRef }, i) => {
    if (!sprite.current || !elementRef.current) return
      const spriteBottom = sprite.current.offsetTop + sprite.current.offsetHeight
      const spriteRight = sprite.current.offsetLeft + sprite.current.offsetWidth
      const elementBottom = elementRef.current.offsetTop + elementRef.current.offsetHeight
      const elementRight = elementRef.current.offsetLeft + elementRef.current.offsetWidth

      if (!(
        spriteBottom <= elementRef.current.offsetTop ||
        sprite.current.offsetTop >= elementBottom ||
        spriteRight <= elementRef.current.offsetLeft ||
        sprite.current.offsetLeft >= elementRight
      ))  overlappedElement = i
    })
    return overlappedElement
  }

  const onKeyDown = (event: any, reposition: Dispatch<PositionUpdate>, sprite: RefObject<HTMLDivElement>) => {
    switch(event.code) {
      case "ArrowRight":
        reposition(rightAnimation)
        break
      case "ArrowLeft":
        reposition(leftAnimation)
        break
      case "Space":
        const crossedElementIndex = isOverElement(sprite)
        if (typeof crossedElementIndex === 'number') {
          const { elementRef } = interactingElements[crossedElementIndex]
          elementRef.current?.click()
        }
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
        x: 455 < window.innerWidth ? 455 : window.innerWidth - 70,
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
