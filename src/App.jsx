import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
//import HomePage from './pages/HomePage/HomePage';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const FrecuencyTables = lazy(() => import('./pages/FrecuencyTables/FrecuencyTables'));
import RoutesNotFound from './utilities/RoutesNotFound';
import Header from './StyledComponents/Header/Header';
import Footer from './StyledComponents/Footer/Footer';
import { PublicRoutes } from './models/routes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Suspense fallback={<>Cargando...</>}>
        <BrowserRouter>
          <Header />
          <RoutesNotFound>
            <Route index element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path={PublicRoutes.FRECUENCY_TABLES} element={<FrecuencyTables />} />
          </RoutesNotFound>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
