import { RefObject } from "react";

export type WindowPosition = { x: number; y: number }

export type SpriteProps = {
  spriteSheet: string
  frameWidth: number
  frameHeight: number
  clickOffset?: number
  frameSpeed?: number
  isFacingLeft?: boolean
}

export enum SpriteActions {
  IDLE = 'IDLE',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  CLICK = 'CLICK',
  UP = 'UP',
  DOWN = 'DOWN'
}

export type Clickables = RefObject<HTMLButtonElement>

export type FrameSet = {
  frameRow: number
  frameCount: number
  isLeftFacing?: boolean
  isLooping?: boolean
  stopAtEnd?: boolean
}

type SpritePositions = {
  [key in keyof typeof SpriteActions]: FrameSet
}

type CharacterProps = {
  disabled?: boolean
}

type SpriteSettings = {
  params: SpriteProps
  positions: SpritePositions
}
