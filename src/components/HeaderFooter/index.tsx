import { RefObject, useRef } from 'react'
import keyboard from 'assets/keyboard.png'

import './Header.scss'
import { PropsWithChildren } from 'react'
import LilGuy, { 
  defaultAnimation, 
  spaceAnimation, 
  leftAnimation, 
  rightAnimation 
} from 'components/Character/LilGuy'

type ControlProps = {
  space: RefObject<HTMLButtonElement>
  left: RefObject<HTMLButtonElement>
  right: RefObject<HTMLButtonElement>
}

const Controls: React.FC<ControlProps> = ({ space, left, right}) => (
  <div className="Controls">
    <img id="keys" src={keyboard} alt="greyson-elkins-header" />
    <button id="spacebar" ref={space} />
    <button id="left" ref={left} />
    <button id="right" ref={right}/>
  </div>
)

const HeaderFooter: React.FC<PropsWithChildren> = ({children}) => {
  const space = useRef<HTMLButtonElement>(null)
  const left = useRef<HTMLButtonElement>(null)
  const right = useRef<HTMLButtonElement>(null)
  const code = useRef<HTMLButtonElement>(null)
  const music = useRef<HTMLButtonElement>(null)
  const contact = useRef<HTMLButtonElement>(null)
  const fighter = useRef<HTMLButtonElement>(null)
  return (
    <>
      <header className="Header">
        <Controls space={space} left={left} right={right} />
        <nav>
          <button ref={fighter} onClick={() => console.log('fighter')}>
            CHOOSE YOUR FIGHTER
          </button>
          <button ref={code} onClick={() => console.log('code')}>
            code
          </button>
          <button ref={music} onClick={() => console.log('music')}>
            music
          </button>
          <button ref={contact} onClick={() => console.log('contact')}>
            contact
          </button>
        </nav>
      </header>
      {children}
      <LilGuy
        interactingElements={[{ elementRef: code }, { elementRef: music }, { elementRef: contact }]}
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
      <footer className='Footer'>
        test
        <Controls space={space} left={left} right={right} />
      </footer>
    </>
  )
}

export default HeaderFooter
