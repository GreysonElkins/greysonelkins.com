import space_ranger from 'assets/SPACERANGER.png'
import { SpriteActions as A } from 'hooks/useSprite'

const SpaceRanger = {
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

export default SpaceRanger
