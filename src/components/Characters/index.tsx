import SpaceRanger, { spaceRangerSettings } from './SpaceRanger'
import LilGuy, { lilGuySettings } from './LilGuy'
import LilGal, { lilGalSettings } from './LilGal'
import MrHat, { mrHatSettings } from './ MrHat'
import Fox, { foxSettings } from './Fox'
import Satan, { satanSettings } from './Satan'
import TheBrain from './TheBrain/TheBrain'
import Grumpy, { grumpySettings } from './Grumpy'

import { CharacterProps } from 'types/Sprites'
import './Characters.scss'

type ElementData = {
  [key: string]: any
  element: React.FC<CharacterProps>,
  settings: any
}

const Characters = () => {
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
      settings: spaceRangerSettings
    }
  }

  const renderButtons = () => 
    Object.keys(buttons).map((k, i) => {
      const Element = buttons[k].element
      return (
        <button key={`character-${i}`}>
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
