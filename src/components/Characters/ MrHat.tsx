import useSprite from 'hooks/useSprite'
import mr_hat from 'assets/MRHAT.png'

import { CharacterProps, SpriteSettings } from 'types/Sprites.d'

export const mrHatSettings: SpriteSettings = {
  params: {
    spriteSheet: mr_hat,
    frameWidth: 128,
    frameHeight: 64,
    clickOffset: 10
  },
  positions: {
    IDLE: {
      frameCount: 8,
      frameRow: 0
    },
    UP: {
      frameCount: 7,
      frameRow: 2,
      isLooping: false
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
    DOWN: {
      frameCount: 5,
      frameRow: 6,
      stopAtEnd: true
    }
  },
}

const MrHat: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = mrHatSettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default MrHat
