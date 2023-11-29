import { useRef, useState, PropsWithChildren } from 'react'
import { useInterval } from 'usehooks-ts'

import useSprite from 'hooks/useSprite'
import { spaceRangerSettings } from 'components/Characters/SpaceRanger'
import keyboard from 'assets/keyboard.png'

import './Header.scss'
import { Link } from 'react-router-dom'

const HeaderFooter: React.FC<PropsWithChildren> = ({children}) => {
  // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const space = useRef<HTMLButtonElement>(null)
  const left = useRef<HTMLButtonElement>(null)
  const right = useRef<HTMLButtonElement>(null)
  const code = useRef<HTMLButtonElement>(null)
  const music = useRef<HTMLButtonElement>(null)
  const contact = useRef<HTMLButtonElement>(null)
  const character = useRef<HTMLButtonElement>(null)
  const [buttonPressed, setButtonPressed] = useState<null | (() => void)>(null)
  const { sprite, moveLeft, moveRight, click } = useSprite(
    spaceRangerSettings.params, 
    spaceRangerSettings.positions, 
  [
    code, music, contact, character 
  ])
  
  useInterval(() => {
    buttonPressed && buttonPressed()
  }, buttonPressed ? 1000 : null)

  return (
    <>
      <div className="Controls">
        <img id="keys" src={keyboard} alt="greyson-elkins-header" />
        <button id="spacebar" ref={space} onClick={click} />
        <button id="left" ref={left} onClick={moveLeft} />
        <button id="right" ref={right}onClick={moveRight} />
      </div>
      <header className="Header">
        <nav>
          <Link to="/code">
            <button ref={code} onClick={() => console.log('code')}>
              code
            </button>
          </Link>
          <Link to="/music">
            <button ref={music} onClick={() => console.log('music')}>
              music
            </button>
          </Link>
          <Link to="/contact">
            <button ref={contact} onClick={() => console.log('contact')}>
              contact
            </button>
          </Link>
          <Link to="/choose-your-character">
            <button ref={character} onClick={() => console.log('character')}>
              CHOOSE YOUR CHARACTER
            </button>
          </Link>
        </nav>
      {sprite}
      </header>
      {children}
    </>
  )
}

export default HeaderFooter
