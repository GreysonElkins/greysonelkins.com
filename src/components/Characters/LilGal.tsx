import useSprite from 'hooks/useSprite'
import lil_gal from 'assets/LILGAL.png'

import { SpriteActions as A, CharacterProps } from 'types/Sprites.d'

export const lilGalSettings = {
  params: {
    spriteSheet: lil_gal,
    frameWidth: 64,
    frameHeight: 64,
    frameCount: 6,
  },
  positions: {
    [A['LEFT']]: {
      frameCount: 8,
      currentFrameRow: 1,
    },
    [A['RIGHT']]: {
      frameCount: 8,
      currentFrameRow: 1,
    },
    [A['CLICK']]: {
      frameCount: 9,
      currentFrameRow: 2,
    },
  },
}

const LilGal: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = lilGalSettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default LilGal
