import { PropsWithChildren, createContext, useState } from "react"

import { SpriteSettings } from "types/Sprites"
import { lilGuySettings } from "components/Characters/LilGuy"

export const PlayerValue = createContext({} as {
  spriteSettings: SpriteSettings
  changeSprite: (settings: SpriteSettings) => void
})

const PlayerContext: React.FC<PropsWithChildren> = ({ children }) => {
  const [spriteSettings, setSpriteSettings] = useState<SpriteSettings>(lilGuySettings)

  const changeSprite = (settings: SpriteSettings) => setSpriteSettings(settings)

  return <PlayerValue.Provider value={{ spriteSettings, changeSprite }}>
    {children}
  </PlayerValue.Provider>
} 

export default PlayerContext
