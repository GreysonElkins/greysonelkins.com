import { useState, useEffect, Dispatch, SetStateAction } from "react"

import { SpriteProps, SpriteActions, FrameSet } from 'types/Sprites.d'
import './Sprite.scss'

const Sprite: React.FC<{ 
  props: SpriteProps
  position: FrameSet
  setAction: Dispatch<SetStateAction<keyof typeof SpriteActions>>
  isFacingLeft?: boolean
}> = ({ props, position, setAction, isFacingLeft }) => {
  // const [faceLeft, setFaceLeft] = useState<boolean>(props.isFacingLeft || false)
  const [currentFrame, setCurrentFrame] = useState<number>(0)
  
  const { spriteSheet, frameWidth, frameHeight, frameSpeed } = props
  const { isLooping, frameCount, frameRow } = position

  useEffect(() => {
    setCurrentFrame(0)
    //eslint-disable-next-line
  }, [position])

  // useEffect(() => {
  //   if (isLeftFacing !== undefined && isLeftFacing !== faceLeft)
  //     setFaceLeft(isLeftFacing) 
  //   //eslint-disable-next-line
  // }, [isLeftFacing])

  useEffect(() => {
    const keyframes = setInterval(() => {
      if (currentFrame < frameCount - 1) {
        setCurrentFrame((p) => p + 1)
      } else {
        if (isLooping === false) {
          setAction('IDLE')
        }
        setCurrentFrame(0)
      }
    }, frameSpeed || 100)
    // cleanup
    return () => clearInterval(keyframes)
  }, [currentFrame, frameCount, frameSpeed, isLooping, setAction])

  return (
    <div className="Sprite" style={{ width: frameWidth, height: frameHeight }}>
      <img
        alt="video game sprite"
        src={spriteSheet}
        style={{
          top: -(frameRow * frameHeight),
          [isFacingLeft ? 'right' : 'left']: -(currentFrame * frameWidth),
          transform: `scaleX(${isFacingLeft ? -1 : 1})`,
        }}
      />
    </div>
  )
}

export default Sprite
