import useSprite from 'hooks/useSprite'
import satan from 'assets/SATAN.png'

import { SpriteActions as A, CharacterProps } from 'types/Sprites.d'

export const satanSettings = {
  params: {
    spriteSheet: satan,
    frameWidth: 64,
    frameHeight: 64,
    frameCount: 7,
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
      currentFrameRow: 2,
    },
  },
}

const Satan: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = satanSettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default Satan
