import HeaderFooter from 'components/HeaderFooter'
import Choices from 'components/Character/Choices'

import './App.scss'

const App = () => 
  <div className="App">
    <HeaderFooter>
      <main>
        <Choices />
      </main>
    </HeaderFooter>
  </div>

export default App;
