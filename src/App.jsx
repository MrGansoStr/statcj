import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import RoutesNotFound from './utilities/RoutesNotFound'
import FrecuencyTables from './pages/FrecuencyTables/FrecuencyTables'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <RoutesNotFound>
          <Route path='/' element={<>Pagina principal statCJ</>} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/tables' element={<FrecuencyTables />} />
        </RoutesNotFound>
      </BrowserRouter>
    </div>
  )
}

export default App
