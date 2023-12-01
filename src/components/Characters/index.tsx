import { useWindowSize } from 'usehooks-ts'

import SpaceRanger, { spaceRangerSettings } from './SpaceRanger'
import LilGuy, { lilGuySettings } from './LilGuy'
import LilGal, { lilGalSettings } from './LilGal'
import MrHat, { mrHatSettings } from './ MrHat'
import Fox, { foxSettings } from './Fox'
import Satan, { satanSettings } from './Satan'
import TheBrain, { theBrainSettings } from './TheBrain'
import Grumpy, { grumpySettings } from './Grumpy'
import usePlayer from 'hooks/usePlayer'

import { CharacterProps, SpriteSettings } from 'types/Sprites.d'
import './Characters.scss'

type ElementData = {
  [key: string]: any
  element: React.FC<CharacterProps>,
  settings: SpriteSettings
}

const Characters: React.FC<{ onSelect?: () => void }> = ({ onSelect }) => {
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
    'Space Man': {
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
          onClick={(event) => {
            changeSprite(buttons[k].settings);
            (event.target as HTMLElement).blur()
            onSelect && onSelect()
          }}
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
