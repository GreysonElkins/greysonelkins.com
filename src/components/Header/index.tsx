import { useRef } from 'react'
import keyboard from 'assets/keyboard.png'

import './Header.scss'
import { PropsWithChildren } from 'react'
import LilGuy, { 
  defaultAnimation, 
  spaceAnimation, 
  leftAnimation, 
  rightAnimation 
} from 'components/Character/LilGuy'

const Header: React.FC<PropsWithChildren> = () => {
  const space = useRef<HTMLButtonElement>(null)
  const left = useRef<HTMLButtonElement>(null)
  const right = useRef<HTMLButtonElement>(null)
  return (
    <>
      <header className="Header">
        <div className="keyboard">
          <img id="keys" src={keyboard} alt="greyson-elkins-header" />
          <button id="spacebar" ref={space} />
          <button id="left" ref={left} />
          <button id="right" ref={right}/>
        </div>
        <nav>
          <button>code</button>
          <button>music</button>
          <button>contact</button>
        </nav>
      </header>
      <LilGuy
        externalActions={[
          {
            eventType: 'mousedown',
            ref: space,
            action: (e, reposition) => reposition(spaceAnimation),
          },
          {
            eventType: 'mousedown',
            ref: left,
            action: (e, reposition) => reposition(leftAnimation),
          },
          {
            eventType: 'mousedown',
            ref: right,
            action: (e, reposition) => reposition(rightAnimation),
          },
          {
            eventType: 'mouseup',
            ref: space,
            action: (e, reposition) => reposition(defaultAnimation),
          },
          {
            eventType: 'mouseup',
            ref: right,
            action: (e, reposition) => reposition(defaultAnimation),
          },
          {
            eventType: 'mouseup',
            ref: left,
            action: (e, reposition) => reposition(defaultAnimation),
          },
        ]}
      />
    </>
  )
}

export default Header
