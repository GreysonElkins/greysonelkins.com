import useSprite from "hooks/useSprite"
import space_ranger from 'assets/SPACERANGER.png'

import { SpriteActions as A, CharacterProps } from 'types/Sprites.d'

export const spaceRangerSettings = {
  params: {
    spriteSheet: space_ranger,
    frameWidth: 64,
    frameHeight: 64,
    frameCount: 4,
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
      frameCount: 5,
      currentFrameRow: 2,
    },
  },
}

const SpaceRanger: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = spaceRangerSettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default SpaceRanger
