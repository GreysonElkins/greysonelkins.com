import HeaderFooter from 'components/HeaderFooter'
import { Outlet } from 'react-router-dom';
import PlayerContext from 'context/Player';

import './App.scss'

const App = () => 
  <div className="App">
    <PlayerContext>
      <HeaderFooter>
        <main>
          <Outlet />
        </main>
      </HeaderFooter>
    </PlayerContext>
  </div>

export default App;
