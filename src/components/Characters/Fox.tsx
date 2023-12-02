import useSprite from 'hooks/useSprite'
import fox from 'assets/FOX.png'

import { CharacterProps, SpriteSettings } from 'types/Sprites.d'

export const foxSettings: SpriteSettings = {
  params: {
    spriteSheet: fox,
    frameWidth: 64,
    frameHeight: 64,
    clickOffset: 10,
  },
  positions: {
    IDLE: {
      frameCount: 5,
      frameRow: 0,
    },
    UP: {
      frameCount: 11,
      frameRow: 3,
      isLooping: false
    },
    DOWN: {
      frameCount: 7,
      frameRow: 6,
      stopAtEnd: true
    },
    LEFT: {
      frameCount: 8,
      frameRow: 2,
      isLeftFacing: true,
    },
    RIGHT: {
      frameCount: 8,
      frameRow: 2,
      isLeftFacing: false,
    },
    CLICK: {
      frameCount: 5,
      frameRow: 4,
      isLooping: false,
    },
  },
}

const Fox: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = foxSettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default Fox
