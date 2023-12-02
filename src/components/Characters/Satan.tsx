import useSprite from 'hooks/useSprite'
import satan from 'assets/SATAN.png'

import { CharacterProps, SpriteSettings } from 'types/Sprites.d'

export const satanSettings: SpriteSettings = {
  params: {
    spriteSheet: satan,
    frameWidth: 64,
    frameHeight: 64,
    clickOffset: 20
  },
  positions: {
    IDLE: {
      frameCount: 7,
      frameRow: 0,
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
      frameRow: 2,
      isLooping: false,
    },
  },
}

const Satan: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = satanSettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default Satan
