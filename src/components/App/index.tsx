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
  <PlayerContext>
  <ToastContainer 
    theme='dark'
    position="bottom-right"
  />
  <div className="App">
    <Header>
    </Header>
    <main>
      <Home />
      <Music />
      {/* 
      <Code />
    <Contact /> */}
    </main>
  </div>
    </PlayerContext>
)


export default App;
