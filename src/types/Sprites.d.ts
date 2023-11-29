import { RefObject } from "react";

export type WindowPosition = { x: number; y: number }

export type SpriteProps = {
  [key: string]: string | number | boolean | WindowPosition | undefined
  spriteSheet: string
  frameWidth: number
  frameHeight: number
  frameCount: number
  frameSpeed?: number
  currentFrameRow?: number
  defaultFrameRow?: number
  isFacingLeft?: boolean
  isLooping?: boolean
  offset?: WindowPosition
}

export enum SpriteActions {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
//   JUMP = 'JUMP',
  CLICK = 'CLICK'
}

export type Clickables = RefObject<HTMLButtonElement>

type SpritePositions = {
  [key in keyof typeof SpriteActions]: SpriteUpdate
}

type CharacterProps = {
  disabled?: boolean
}

type SpriteSettings = {
  params: SpriteProps
  positions: SpritePositions
}
