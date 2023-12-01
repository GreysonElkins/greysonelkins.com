import useSprite from 'hooks/useSprite'
import mr_hat from 'assets/MRHAT.png'

import { CharacterProps, SpriteSettings } from 'types/Sprites.d'

export const mrHatSettings: SpriteSettings = {
  params: {
    spriteSheet: mr_hat,
    frameWidth: 128,
    frameHeight: 64
  },
  positions: {
    IDLE: {
      frameCount: 8,
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
      frameRow: 3,
      isLooping: false
    },
  },
}

const MrHat: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = mrHatSettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default MrHat
