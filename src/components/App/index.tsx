import { ToastContainer } from 'react-toastify'
import HeaderFooter from 'components/HeaderFooter'
import PlayerContext from 'context/Player'
import Music from 'views/music'
import Contact from 'views/Contact'
import 'react-toastify/dist/ReactToastify.css'

import './App.scss'
import Code from 'views/code';

const App = () => (
  <div className="App">
    <ToastContainer 
      theme='dark'
      position="bottom-right"
    />
    <PlayerContext>
      <HeaderFooter>
        <main>
          <Code />
          <Music />
          <Contact />
        </main>
      </HeaderFooter>
    </PlayerContext>
  </div>
)


export default App;
