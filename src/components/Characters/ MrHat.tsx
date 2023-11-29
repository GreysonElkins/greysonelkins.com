import useSprite from 'hooks/useSprite'
import mr_hat from 'assets/MRHAT.png'

import { SpriteActions as A, CharacterProps } from 'types/Sprites.d'

export const mrHatSettings = {
  params: {
    spriteSheet: mr_hat,
    frameWidth: 128,
    frameHeight: 64,
    frameCount: 8,
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
      frameCount: 6,
      currentFrameRow: 3,
    },
  },
}

const MrHat: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = mrHatSettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default MrHat
