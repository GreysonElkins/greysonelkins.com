import useSprite from 'hooks/useSprite'
import lil_guy from 'assets/LILGUY.png'

import { SpriteActions as A, CharacterProps } from 'types/Sprites.d'

export const lilGuySettings = {
  params: {
    spriteSheet: lil_guy,
    frameWidth: 64,
    frameHeight: 64,
    frameCount: 13,
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
      currentFrameRow: 10,
    },
  },
}

const LilGuy: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = lilGuySettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default LilGuy
