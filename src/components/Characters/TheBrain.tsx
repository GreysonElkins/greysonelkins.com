import useSprite from 'hooks/useSprite'
import the_brain from 'assets/BRAIN.png'

import { CharacterProps, SpriteSettings } from 'types/Sprites.d'

export const theBrainSettings: SpriteSettings = {
  params: {
    spriteSheet: the_brain,
    frameWidth: 64,
    frameHeight: 64,
    clickOffset: 10
  },
  positions: {
    IDLE: {
      frameCount: 8,
      frameRow: 3,
    },
    LEFT: {
      frameCount: 8,
      frameRow: 0,
      isLeftFacing: true,
    },
    RIGHT: {
      frameCount: 8,
      frameRow: 0,
      isLeftFacing: false,
    },
    CLICK: {
      frameCount: 5,
      frameRow: 1,
      isLooping: false,
    },
  },
}

const TheBrain: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = theBrainSettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default TheBrain
