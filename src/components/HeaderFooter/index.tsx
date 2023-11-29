import { RefObject, useRef, useState, useEffect } from 'react'
import { useInterval } from 'usehooks-ts'
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
  // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const space = useRef<HTMLButtonElement>(null)
  const left = useRef<HTMLButtonElement>(null)
  const right = useRef<HTMLButtonElement>(null)
  const code = useRef<HTMLButtonElement>(null)
  const music = useRef<HTMLButtonElement>(null)
  const contact = useRef<HTMLButtonElement>(null)
  const character = useRef<HTMLButtonElement>(null)
  const [buttonPressed, setButtonPressed] = useState<null | (() => void)>(null)
  
  useInterval(() => {
    buttonPressed && buttonPressed()
  }, buttonPressed ? 1000 : null)

  return (
    <>
      <Controls space={space} left={left} right={right} />
      <header className="Header">
        <nav>
          <button ref={character} onClick={() => console.log('character')}>
            CHOOSE YOUR CHARACTER
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
        interactingElements={[
          { elementRef: code },
          { elementRef: music },
          { elementRef: contact },
          { elementRef: character },
        ]}
        externalActions={[
          {
            eventType: 'mousedown',
            ref: space,
            action: (e, reposition) => setButtonPressed(reposition(spaceAnimation)),
          },
          {
            eventType: 'mousedown',
            ref: left,
            action: (e, reposition) => setButtonPressed(reposition(leftAnimation)),
          },
          {
            eventType: 'mousedown',
            ref: right,
            action: (e, reposition) => setButtonPressed(reposition(rightAnimation)),
          },
          {
            eventType: 'mouseup',
            ref: space,
            action: (e, reposition) => { 
              console.log('release')
              setButtonPressed(null)
              reposition(defaultAnimation)
            },
          },
          {
            eventType: 'mouseup',
            ref: right,
            action: (e, reposition) => { 
              setButtonPressed(null)
              reposition(defaultAnimation)
            },
          },
          {
            eventType: 'mouseup',
            ref: left,
            action: (e, reposition) => { 
              setButtonPressed(null)
              reposition(defaultAnimation)
            },
          },
        ]}
      />
    </>
  )
}

export default HeaderFooter
