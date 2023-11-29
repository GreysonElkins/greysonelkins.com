import { useState, useEffect } from 'react'
import './Sprite.scss'

export type Props = {
  spritesheet: string
  frames: number
  width: number
  height: number
  offsetX?: number
  offsetY?: number
  keylength?: number
  invert?: boolean
  row?: number
  onFinishCycle?: () => void
}

const Sprite: React.FC<Props> = ({ 
  spritesheet,
  width,
  height,
  offsetX = 0,
  offsetY = 0,
  frames,
  keylength = 300,
  invert = false,
  row = 1,
  onFinishCycle
}) => {
  const [frame, setFrame] = useState<number>(invert ? frames - 1 : 0)

  useEffect(() => {
    const keyframes = setInterval(() => {
      if (!invert && frame < frames - 1 && frame >= 0) {
        setFrame(p => p + 1)
      } else if(invert && frame <= frames - 1 && frame > 0) {
        setFrame(p => p - 1)
      } else {
        setFrame(invert ? frames - 1 : 0)
        onFinishCycle && onFinishCycle()
      }
    }, keylength)

    return () => clearInterval(keyframes)
  }, [frame, frames, keylength, invert])

  return (
  <div 
    className="Sprite"
    style={{
      width, height, 
      paddingLeft: `-${offsetX}px`
    }}
  >
    <img 
      alt="sprite" 
      src={spritesheet}
      style={{
        top: -((row - 1) * height) - offsetY,
        [invert ? 'right': 'left']: -(frame * width),
        transform: `scaleX(${invert ? -1 : 1})`
      }}
    />
  </div>
  )
}

export default Sprite
