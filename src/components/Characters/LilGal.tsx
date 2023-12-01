import useSprite from 'hooks/useSprite'
import lil_gal from 'assets/LILGAL.png'

import { CharacterProps, SpriteSettings } from 'types/Sprites.d'

export const lilGalSettings: SpriteSettings = {
  params: {
    spriteSheet: lil_gal,
    frameWidth: 64,
    frameHeight: 64,
  },
  positions: {
    IDLE: {
      frameCount: 6,
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
      frameCount: 9,
      frameRow: 2,
      isLooping: false,
    },
  },
}

const LilGal: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = lilGalSettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default LilGal
