import useSprite from "hooks/useSprite"
import space_ranger from 'assets/SPACERANGER.png'

import { CharacterProps, SpriteSettings } from 'types/Sprites.d'

export const spaceRangerSettings: SpriteSettings = {
  params: {
    spriteSheet: space_ranger,
    frameWidth: 64,
    frameHeight: 64,
  },
  positions: {
    IDLE: {
      frameCount: 4,
      frameRow: 0,
    },
    UP: {
      frameCount: 5,
      frameRow: 1,
      isLooping: false
    },
    DOWN: {
      frameCount: 4,
      frameRow: 4,
      stopAtEnd: true
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
      frameCount: 5,
      frameRow: 2,
      isLooping: false,
    },
  },
}

const SpaceRanger: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = spaceRangerSettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default SpaceRanger
