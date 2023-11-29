import useSprite from 'hooks/useSprite'
import fox from 'assets/FOX.png'

import { SpriteActions as A, CharacterProps } from 'types/Sprites.d'

export const foxSettings = {
  params: {
    spriteSheet: fox,
    frameWidth: 64,
    frameHeight: 64,
    frameCount: 5,
  },
  positions: {
    [A['LEFT']]: {
      frameCount: 8,
      currentFrameRow: 2,
    },
    [A['RIGHT']]: {
      frameCount: 8,
      currentFrameRow: 2,
    },
    [A['CLICK']]: {
      frameCount: 11,
      currentFrameRow: 3,
    },
  },
}

const Fox: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = foxSettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default Fox
