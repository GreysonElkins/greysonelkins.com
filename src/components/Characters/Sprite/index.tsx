import { useState, useEffect } from "react"

import { SpriteProps } from 'types/Sprites.d'
import './Sprite.scss'

const Sprite: React.FC<SpriteProps> = ({
  spriteSheet,
  frameWidth,
  frameHeight,
  frameCount,
  isFacingLeft = false,
  frameSpeed = 150,
  defaultFrameRow = 0,
  currentFrameRow,
  isLooping = true,
  offset = { x: 0, y: 0 }
}) => {
  const [currentRow, setCurrentRow] = useState(defaultFrameRow)
  const [currentFrame, setCurrentFrame] = useState<number>(0)
  const [internalFrameCount, setFrameCount] = useState({ current: frameCount, orig: frameCount })
  const [looping, setLooping] = useState<boolean>(true)

  useEffect(() => {
    // reset current frame 
    if (!isFacingLeft) return setCurrentFrame(0)
    if (isFacingLeft) return setCurrentFrame(frameCount - 1)
  }, [isLooping, frameCount, isFacingLeft])

  useEffect(() => setLooping(isLooping), [isLooping])
  useEffect(() => setCurrentRow(currentFrameRow || defaultFrameRow), 
    [currentFrameRow, defaultFrameRow]
  )
  useEffect(() => setFrameCount(prev => ({ ...prev, current: frameCount })), [frameCount])
  useEffect(() => {
    //animation
    const keyframes = setInterval(() => {
      if (isFacingLeft === undefined) return
      // debugger
      if (!isFacingLeft && currentFrame < (internalFrameCount.current - 1) && currentFrame >= 0) {
        setCurrentFrame((p) => p + 1)
      } else if (isFacingLeft && currentFrame <= (internalFrameCount.current - 1) && currentFrame > 0) {
        setCurrentFrame((p) => p - 1)
      } else {
        setCurrentFrame(isFacingLeft ? internalFrameCount.current - 1 : 0)
        if (!looping) {
          setLooping(true)
          setCurrentRow(defaultFrameRow)
          setFrameCount(prev => ({ ...prev, current: prev.orig }))
        }
      }
    }, frameSpeed)
    // cleanup
    return () => clearInterval(keyframes)
  }, [isFacingLeft, currentFrame, frameCount, looping, frameSpeed, defaultFrameRow, internalFrameCount])

  return (
    <div className="Sprite" style={{ width: frameWidth, height: frameHeight }}>
      <img
        alt="video game sprite"
        src={spriteSheet}
        style={{
          top: -(currentRow * frameHeight) - offset.y,
          [isFacingLeft ? 'right' : 'left']: -(currentFrame * frameWidth) - offset.x,
          transform: `scaleX(${isFacingLeft ? -1 : 1})`,
        }}
      />
    </div>
  )
}

export default Sprite
