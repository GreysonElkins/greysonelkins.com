import useSprite from 'hooks/useSprite'
import lil_guy from 'assets/LILGUY.png'

import { CharacterProps, SpriteSettings } from 'types/Sprites.d'

export const lilGuySettings: SpriteSettings = {
  params: {
    spriteSheet: lil_guy,
    frameWidth: 64,
    frameHeight: 64
  },
  positions: {
    IDLE: {
      frameCount: 13,
      frameRow: 0
    },
    LEFT: {
      frameCount: 8,
      frameRow: 1,
      isLeftFacing: true
    },
    RIGHT: {
      frameCount: 8,
      frameRow: 1,
      isLeftFacing: false
    },
    CLICK: {
      frameCount: 6,
      frameRow: 10,
      isLooping: false
    },
  },
}

const LilGuy: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = lilGuySettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default LilGuy
