import useSprite from 'hooks/useSprite'
import grumpy from 'assets/GRUMPY.png'

import { CharacterProps, SpriteSettings } from 'types/Sprites.d'

export const grumpySettings: SpriteSettings = {
  params: {
    spriteSheet: grumpy,
    frameWidth: 64,
    frameHeight: 64,
  },
  positions: {
    IDLE: {
      frameCount: 4,
      frameRow: 0,
    },
    LEFT: {
      frameCount: 4,
      frameRow: 1,
      isLeftFacing: true,
    },
    RIGHT: {
      frameCount: 4,
      frameRow: 1,
      isLeftFacing: false,
    },
    CLICK: {
      frameCount: 4,
      frameRow: 3,
      isLooping: false,
    },
  },
}

const Grumpy: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = grumpySettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default Grumpy
