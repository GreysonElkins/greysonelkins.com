import useSprite from 'hooks/useSprite'
import grumpy from 'assets/GRUMPY.png'

import { SpriteActions as A, CharacterProps } from 'types/Sprites.d'

export const grumpySettings = {
  params: {
    spriteSheet: grumpy,
    frameWidth: 64,
    frameHeight: 64,
    frameCount: 4,
  },
  positions: {
    [A['LEFT']]: {
      frameCount: 4,
      currentFrameRow: 1,
    },
    [A['RIGHT']]: {
      frameCount: 4,
      currentFrameRow: 1,
    },
    [A['CLICK']]: {
      frameCount: 4,
      currentFrameRow: 3,
    },
  },
}

const Grumpy: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = grumpySettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default Grumpy
