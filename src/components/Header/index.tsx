import { useRef, PropsWithChildren } from 'react'

import useSprite from 'hooks/useSprite'
import usePlayer from 'hooks/usePlayer'
import keyboard from 'assets/keyboard2.png'
import Socials from 'components/Socials'

import './Header.scss'
import { Link, NavLink } from 'react-router-dom'

const HeaderFooter: React.FC<PropsWithChildren> = ({children}) => {
  // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const space = useRef<HTMLButtonElement>(null)
  const left = useRef<HTMLButtonElement>(null)
  const right = useRef<HTMLButtonElement>(null)
  const code = useRef<HTMLButtonElement>(null)
  const music = useRef<HTMLButtonElement>(null)
  const contact = useRef<HTMLButtonElement>(null)
  const character = useRef<HTMLButtonElement>(null)
  const { spriteSettings, toggleMenuIsOpen, closeCharacterMenu } = usePlayer()
  const { sprite, moveLeft, moveUp, moveDown, moveRight, click, idle } = useSprite(
    spriteSettings.params, 
    spriteSettings.positions, 
  [
    code, music, contact, character 
  ], false,
  { x: 370, y: 44 }
  )
  
  return (
    <>
      <header className="Header">
        <div className="Controls">
          <Link to="/">
            <h1>Greyson Elkins.COM</h1>
          </Link>
          <button id="spacebar" ref={space} onMouseDown={() => {
            
            click()
          }} />
          <button
            id="left"
            ref={left}
            onMouseDown={() => {
              closeCharacterMenu()
              moveLeft()
            }}
            onMouseUp={idle}
            onTouchStart={() => {
              closeCharacterMenu()
              moveLeft()
            }}
            onTouchEnd={idle}
          />
          <button
            id="down"
            onMouseDown={() => {
              closeCharacterMenu()
              moveDown()
            }}
            onMouseUp={idle}
            onTouchStart={() => {
              closeCharacterMenu()
              moveDown()
            }}
            onTouchEnd={idle}
          />
          <button
            id="up"
            onMouseDown={() => {
              closeCharacterMenu()
              moveUp()
            }}
            // onMouseUp={idle}
            onTouchStart={() => {
              closeCharacterMenu()
              moveUp()
            }}
          />
          <button
            id="right"
            ref={right}
            onMouseDown={() => {
              closeCharacterMenu()
              moveRight() 
            }}
            onMouseUp={idle}
            onTouchStart={() => {
              closeCharacterMenu()
              moveRight() 
            }}
            onTouchEnd={idle}
          />
          <img id="keys" src={keyboard} alt="greyson-elkins-header" />
        </div>
        <div className="linksAndNav">
          <Socials size="lg" />
          <nav>
            < NavLink to="/code">
              
              <button ref={code} onClick={closeCharacterMenu}>code</button>
            </ NavLink>
            < NavLink to="/music">
              <button ref={music} onClick={closeCharacterMenu}>music</button>
            </ NavLink>
            < NavLink to="/contact">
              <button ref={contact} onClick={closeCharacterMenu}>contact</button>
            </ NavLink>
            <button ref={character} onClick={toggleMenuIsOpen}>
              CHOOSE YOUR CHARACTER
            </button>
          </nav>
        </div>
        {sprite}
      </header>
      {children}
    </>
  )
}

export default HeaderFooter
