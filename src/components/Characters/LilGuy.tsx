import useSprite from 'hooks/useSprite'
import lil_guy from 'assets/LILGUY.png'

import { CharacterProps, SpriteSettings } from 'types/Sprites.d'

export const lilGuySettings: SpriteSettings = {
  params: {
    spriteSheet: lil_guy,
    frameWidth: 64,
    frameHeight: 64,
    clickOffset: 30,
  },
  positions: {
    IDLE: {
      frameCount: 13,
      frameRow: 0,
    },
    UP: {
      frameCount: 6,
      frameRow: 5,
      isLooping: false
    },
    DOWN: {
      frameCount: 7,
      frameRow: 7,
      stopAtEnd: true
    },
    LEFT: {
      frameCount: 8,
      frameRow: 1,
      isLeftFacing: true,
    },
    RIGHT: {
      frameCount: 8,
      frameRow: 1,
      isLeftFacing: false,
    },
    CLICK: {
      frameCount: 6,
      frameRow: 10,
      isLooping: false,
    },
  },
}

const LilGuy: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = lilGuySettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default LilGuy
