export type CharacterPosition = {
  [key: string]: any
  spriteSheetRow: number
  currentFrame: number
  frames: number
  isInverted: boolean
  x: number
  y: number
}

export enum CharacterDirection {
    LEFT = 'LEFT',
    RIGHT = 'RIGHT'
}

export type CharacterAction = {
  isWindowEvent?: boolean
  eventType: string,
  ref?: RefObject<HTMLElement>
  action: (event: Event, move: Dispatch<PositionUpdate>) => void
}

export type PositionUpdate = {
  [key: string]: any
  spriteSheetRow?: number
  currentFrame?: number
  frames?: number
  isInverted?: boolean
  action?: CharacterDirection, 
  x?: number
  y?: number
}
