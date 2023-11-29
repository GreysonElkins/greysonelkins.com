import useSprite, { SpriteActions as A } from "hooks/useSprite"
import space_ranger from 'assets/SPACERANGER.png'

const SpaceRanger: React.FC = () => {
  const params = {
    spriteSheet: space_ranger,
    frameWidth: 64,
    frameHeight: 64,
    frameCount: 4
  }

  const positions = {
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
      currentFrameRow: 2
    }
  }  

  const { sprite } = useSprite(params, positions)
  return <div className="Character">{sprite}</div>
}

export default SpaceRanger
