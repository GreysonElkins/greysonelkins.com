import { useRef, useState, PropsWithChildren } from 'react'
import { useInterval } from 'usehooks-ts'

import useSprite from 'hooks/useSprite'
import usePlayer from 'hooks/usePlayer'
import keyboard from 'assets/keyboard2.png'

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
  const { spriteSettings, toggleMenuIsOpen } = usePlayer()
  const { sprite, moveLeft, moveRight, click } = useSprite(
    spriteSettings.params, 
    spriteSettings.positions, 
  [
    code, music, contact, character 
  ], false,
  { x: 370, y: 44 }
  )
  
  useInterval(() => {
    buttonPressed && buttonPressed()
  }, buttonPressed ? 1000 : null)

  return (
    <>
      <div className="Controls">
        <h1>Greyson Elkins.COM</h1>
        <img id="keys" src={keyboard} alt="greyson-elkins-header" />
        <button id="spacebar" ref={space} onClick={click} />
        <button id="left" ref={left} onClick={moveLeft} />
        <button id="right" ref={right}onClick={moveRight} />
      </div>
      <header className="Header">
        <nav>
          <Link to="/code">
            <button ref={code}>
              code
            </button>
          </Link>
          <Link to="/music">
            <button ref={music}>
              music
            </button>
          </Link>
          <Link to="/contact">
            <button ref={contact}>
              contact
            </button>
          </Link>
          <button 
            ref={character} 
            onClick={toggleMenuIsOpen}
          >
            CHOOSE YOUR CHARACTER
          </button>
          
        </nav>
      {sprite}
      </header>
      {children}
    </>
  )
}

export default HeaderFooter
