import { RefObject } from "react";

export type WindowPosition = { x: number; y: number }

export type SpriteProps = {
  // [key: string]: string | number | boolean | WindowPosition | undefined
  spriteSheet: string
  frameWidth: number
  frameHeight: number
  // frameCount: number
  frameSpeed?: number
  // currentFrameRow?: number
  // defaultFrameRow?: number
  isFacingLeft?: boolean
  // isLooping?: boolean
  // offset?: WindowPosition
}

export enum SpriteActions {
  IDLE = 'IDLE',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
//   JUMP = 'JUMP',
  CLICK = 'CLICK'
}

export type Clickables = RefObject<HTMLButtonElement>

type SpritePositions = {
  [key in keyof typeof SpriteActions]: {
    frameRow: number
    frameCount: number
    // frameWidth?: number
    // frameHeight?: number
    // frameSpeed?: number
    isLeftFacing?: boolean
    isLooping?: boolean
  }
}

type CharacterProps = {
  disabled?: boolean
}

type SpriteSettings = {
  params: SpriteProps
  positions: SpritePositions
}
