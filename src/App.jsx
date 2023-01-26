import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import HomePage from './pages/HomePage/HomePage';
import RoutesNotFound from './utilities/RoutesNotFound';
import FrecuencyTables from './pages/FrecuencyTables/FrecuencyTables';
import Header from './StyledComponents/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <RoutesNotFound>
          <Route index element={<>Pagina principal statCJ</>} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/tables' element={<FrecuencyTables />} />
        </RoutesNotFound>
      </BrowserRouter>
    </div>
  )
}

export default App
