import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
//import HomePage from './pages/HomePage/HomePage';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const FrecuencyTables = lazy(() => import('./pages/FrecuencyTables/FrecuencyTables'));
const Mct = lazy(() => import('./pages/MCT/Mct'));
const Percentiles = lazy(() => import('./pages/Percentiles/Percentiles'));
const SearchSymbol = lazy(() => import('./pages/SearchSymbol/SearchSymbol'));
const SearchValueZ = lazy(() => import('./pages/SearchValueZ/SearchValueZ'));
import RoutesNotFound from './utilities/RoutesNotFound';
import Header from './StyledComponents/Header/Header';
import Footer from './StyledComponents/Footer/Footer';
import { PublicRoutes } from './models/routes';
import VarianceAndError from './pages/VarianceAndError/VarianceAndError';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import StatGraphs from './pages/StatGraphs/StatGraphs';


const theme = createTheme({
  palette: {
    primary: {
      main: '#282a36',
    },
    secondary: {
      main: '#443C68',
    },
  },
});

function App() {
  return (
    <div className="App" >
    <ThemeProvider theme={theme}>
      <Suspense fallback={<>Cargando...</>}>
        <BrowserRouter>
          <Header />
          <RoutesNotFound>
            <Route index element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path={PublicRoutes.FRECUENCY_TABLES} element={<FrecuencyTables />} />
            <Route path={PublicRoutes.MCT} element={<Mct />} />
            <Route path={PublicRoutes.VARIANCE} element={<VarianceAndError />} />
            <Route path={PublicRoutes.PERCENTILES} element={<Percentiles />} />
            <Route path={PublicRoutes.SYMBOLS} element={<SearchSymbol />} />
            <Route path={PublicRoutes.SEARCHZ} element={<SearchValueZ/>} />
            <Route path={PublicRoutes.GRAPHS} element={<StatGraphs/>} />
          </RoutesNotFound>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
    </div>
  )
}

export default App;