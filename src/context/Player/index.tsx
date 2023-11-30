import { PropsWithChildren, createContext, useState } from "react"

import { SpriteSettings } from "types/Sprites"
import { lilGuySettings } from "components/Characters/LilGuy"
import Characters from "components/Characters"

import './Player.scss'

export const PlayerValue = createContext({} as {
  spriteSettings: SpriteSettings
  changeSprite: (settings: SpriteSettings) => void
  toggleMenuIsOpen: () => void
})

const PlayerContext: React.FC<PropsWithChildren> = ({ children }) => {
  const [spriteSettings, setSpriteSettings] = useState<SpriteSettings>(lilGuySettings)
  const [characterMenuOpen, setCharacterMenuOpen] = useState<boolean>(false)

  const toggleMenuIsOpen = () => setCharacterMenuOpen(prev => !prev)

  const changeSprite = (settings: SpriteSettings) => setSpriteSettings(settings)

  return <PlayerValue.Provider value={{ spriteSettings, changeSprite, toggleMenuIsOpen }}>
    <div className={`PlayerSettings-menu-${characterMenuOpen ? 'open' : 'closed'}`}>
      <Characters onSelect={toggleMenuIsOpen}/>
      {children}
    </div>
  </PlayerValue.Provider>
} 

export default PlayerContext
