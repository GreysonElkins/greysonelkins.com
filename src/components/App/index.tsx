import HeaderFooter from 'components/HeaderFooter'
import { Outlet } from 'react-router-dom';
import PlayerContext from 'context/Player';

import './App.scss'
import Code from 'views/code';

const App = () => 
  <div className="App">
    <PlayerContext>
      <HeaderFooter>
        <main>
          <Code />
        </main>
      </HeaderFooter>
    </PlayerContext>
  </div>

export default App;
