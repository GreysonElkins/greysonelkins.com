import { useRef, PropsWithChildren } from 'react'

import useSprite from 'hooks/useSprite'
import usePlayer from 'hooks/usePlayer'
import keyboard from 'assets/keyboard2.png'
import Socials from 'components/Socials'

import './Header.scss'
import { Link } from 'react-router-dom'
import useView from 'hooks/useView'

const HeaderFooter: React.FC<PropsWithChildren> = ({children}) => {
  // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const space = useRef<HTMLButtonElement>(null)
  const left = useRef<HTMLButtonElement>(null)
  const right = useRef<HTMLButtonElement>(null)
  const code = useRef<HTMLButtonElement>(null)
  const music = useRef<HTMLButtonElement>(null)
  const contact = useRef<HTMLButtonElement>(null)
  const character = useRef<HTMLButtonElement>(null)
  const { spriteSettings, toggleMenuIsOpen } = usePlayer()
  const { sprite, moveLeft, moveRight, click, idle } = useSprite(
    spriteSettings.params, 
    spriteSettings.positions, 
  [
    code, music, contact, character 
  ], false,
  { x: 370, y: 44 }
  )
  const { isOnPage: isContact } = useView('/contact')
  
  return (
    <>
      <div className="Controls">
        <h1>Greyson Elkins.COM</h1>
        <button id="spacebar" ref={space} onMouseDown={click} />
        <button id="left" ref={left} onMouseDown={moveLeft} onMouseUp={idle} onTouchStart={moveLeft} onTouchEnd={idle}/>
        {/* <button id="right" ref={right} onMouseDown={() => console.log("click")} onMouseUp={() => console.log("release")} onClick={() => console.log("press")} /> */}
        <button id="right" ref={right} onMouseDown={moveRight} onMouseUp={idle} onTouchStart={moveLeft} onTouchEnd={idle} />
          <img id="keys" src={keyboard} alt="greyson-elkins-header" />
      </div>
      <header className="Header">
        {!isContact && <Socials size="lg" />}
        <nav>
          <Link to="/code">
            <button ref={code}>code</button>
          </Link>
          <Link to="/music">
            <button ref={music}>music</button>
          </Link>
          <Link to="/contact">
            <button ref={contact}>contact</button>
          </Link>
          <button ref={character} onClick={toggleMenuIsOpen}>
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
