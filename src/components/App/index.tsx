import { ToastContainer } from 'react-toastify'
import Home from 'views/Home'
import Header from 'components/Header'
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
      <Header>
      </Header>
      <main>
        {/* <Home />
        <Code />
        <Music />
        <Contact /> */}
      </main>
    </PlayerContext>
  </div>
)


export default App;
