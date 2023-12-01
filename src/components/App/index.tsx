import { useEffect } from 'react';

import HeaderFooter from 'components/HeaderFooter'
import PlayerContext from 'context/Player'
import Music from 'views/music';

import './App.scss'
import Code from 'views/code';

const App = () => {
  
  useEffect(() => window.scrollTo(0,0), [])
  
  return (
    <div className="App">
      <PlayerContext>
        <HeaderFooter>
          <main>
            <Code />
            <Music />
          </main>
        </HeaderFooter>
      </PlayerContext>
    </div>
  )
}

export default App;
