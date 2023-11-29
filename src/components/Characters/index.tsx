import SpaceRanger, { spaceRangerSettings } from './SpaceRanger'
import LilGuy, { lilGuySettings } from './LilGuy'
import LilGal, { lilGalSettings } from './LilGal'
import MrHat, { mrHatSettings } from './ MrHat'
import Fox, { foxSettings } from './Fox'
import Satan, { satanSettings } from './Satan'
import TheBrain, { theBrainSettings } from './TheBrain/TheBrain'
import Grumpy, { grumpySettings } from './Grumpy'
import usePlayer from 'hooks/usePlayer'

import { CharacterProps, SpriteSettings } from 'types/Sprites.d'
import './Characters.scss'

type ElementData = {
  [key: string]: any
  element: React.FC<CharacterProps>,
  settings: SpriteSettings
}

const Characters = () => {
  const { changeSprite } = usePlayer()

  const buttons: { [key: string]: ElementData} = {
    'Lil Guy': { 
      element: LilGuy, 
      settings: lilGuySettings
    },
    'Lil Gal': {
      element: LilGal,
      settings: lilGalSettings
    },
    'Mr. Hat': {
      element: MrHat,
      settings: mrHatSettings
    },
    'A Fox': {
      element: Fox,
      settings: foxSettings
    },
    'SATAN': {
      element: Satan,
      settings: satanSettings
    },
    'Grumpy': {
      element: Grumpy,
      settings: grumpySettings
    },
    'Space Ranger': {
      element: SpaceRanger,
      settings: spaceRangerSettings
    },
    'The Brain': {
      element: TheBrain,
      settings: theBrainSettings
    }
  }

  const renderButtons = () => 
    Object.keys(buttons).map((k, i) => {
      const Element = buttons[k].element
      return (
        <button 
          key={`character-${i}`} 
          onClick={() => changeSprite(buttons[k].settings)}
        >
          <Element disabled />
          {k}
        </button>
      )
    })

  return (
    <div className="Characters">
      {renderButtons()}
    </div>
  )
}

export default Characters
