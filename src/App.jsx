import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
//import HomePage from './pages/HomePage/HomePage';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const FrecuencyTables = lazy(() => import('./pages/FrecuencyTables/FrecuencyTables'));
const Mct = lazy(() => import('./pages/MCT/Mct'));
import RoutesNotFound from './utilities/RoutesNotFound';
import Header from './StyledComponents/Header/Header';
import Footer from './StyledComponents/Footer/Footer';
import { PublicRoutes } from './models/routes';
import VarianceAndError from './pages/VarianceAndError/VarianceAndError';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando...</>}>
        <BrowserRouter>
          <Header />
          <RoutesNotFound>
            <Route index element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path={PublicRoutes.FRECUENCY_TABLES} element={<FrecuencyTables />} />
            <Route path={PublicRoutes.MCT} element={<Mct />} />
            <Route path={PublicRoutes.VARIANCE} element={<VarianceAndError />} />
          </RoutesNotFound>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
