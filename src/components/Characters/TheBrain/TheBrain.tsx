import useSprite from 'hooks/useSprite'
import the_brain from 'assets/BRAIN.png'

import { SpriteActions as A, CharacterProps } from 'types/Sprites.d'

export const theBrainSettings = {
  params: {
    spriteSheet: the_brain,
    frameWidth: 64,
    frameHeight: 64,
    frameCount: 8,
    defaultFrameRow: 3
  },
  positions: {
    [A['LEFT']]: {
      frameCount: 8,
      currentFrameRow: 0,
    },
    [A['RIGHT']]: {
      frameCount: 8,
      currentFrameRow: 0,
    },
    [A['CLICK']]: {
      frameCount: 5,
      currentFrameRow: 1,
    },
  },
}

const TheBrain: React.FC<CharacterProps> = ({ disabled }) => {
  const { params, positions } = theBrainSettings
  const { sprite } = useSprite(params, positions, [], disabled)

  return <div className="Character">{sprite}</div>
}

export default TheBrain
