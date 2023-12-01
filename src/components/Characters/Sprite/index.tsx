import { useState, useEffect } from "react"

import { SpritePositions, SpriteProps, SpriteActions } from 'types/Sprites.d'
import './Sprite.scss'

const Sprite: React.FC<{ 
  props: SpriteProps
  positions: SpritePositions 
  position?: keyof typeof SpriteActions
}> = ({ props, positions, position }) => {
  const [p, setPosition] = useState<keyof typeof SpriteActions>(position || 'IDLE')
  const [faceLeft, setFaceLeft] = useState<boolean>(props.isFacingLeft || false)
  const [currentFrame, setCurrentFrame] = useState<number>(0)
  
  const { spriteSheet, frameWidth, frameHeight, frameSpeed } = props
  const { isLooping, isLeftFacing, frameCount, frameRow } = positions[p]

  useEffect(() => {
    if (!position) return
    setCurrentFrame(0)
    setPosition(position)
  }, [position])

  useEffect(() => {
    if (isLeftFacing !== undefined && isLeftFacing !== faceLeft)
      setFaceLeft(isLeftFacing) 
    //eslint-disable-next-line
  }, [isLeftFacing])

  useEffect(() => {
    const keyframes = setInterval(() => {
      if (currentFrame < frameCount - 1) {
        setCurrentFrame((p) => p + 1)
      } else {
        if (isLooping === false) {
          // setLooping(true)
          setPosition('IDLE')
        }
        setCurrentFrame(0)
      }
    }, frameSpeed || 150)
    // cleanup
    return () => clearInterval(keyframes)
  }, [currentFrame, frameCount, frameSpeed, isLooping])

  return (
    <div className="Sprite" style={{ width: frameWidth, height: frameHeight }}>
      <img
        alt="video game sprite"
        src={spriteSheet}
        style={{
          top: -(frameRow * frameHeight),
          [faceLeft ? 'right' : 'left']: -(currentFrame * frameWidth),
          transform: `scaleX(${faceLeft ? -1 : 1})`,
        }}
      />
    </div>
  )
}

export default Sprite
