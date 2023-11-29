import HeaderFooter from 'components/HeaderFooter'
import { Outlet } from 'react-router-dom';


import './App.scss'

const App = () => 
  <div className="App">
    <HeaderFooter>
      <main>
        <Outlet />
      </main>
    </HeaderFooter>
  </div>

export default App;
