import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
const SearchSymbol = lazy(() => import('./pages/SearchSymbol/SearchSymbol'));
import RoutesNotFound from './utilities/RoutesNotFound';
import Header from './StyledComponents/Header/Header';
import Footer from './StyledComponents/Footer/Footer';
import { PublicRoutes } from './models/routes';
import SpinnerFallback from './utilities/SpinnerFallback';
const MainHome = lazy(() => import('./pages/MainHome/MainHome'));
import RoutesCalculator from './Routes/RoutesCalculator';
import RoutesTopics from './Routes/RoutesTopics';
import RoutesDistributions from './Routes/RoutesDistributions';
import ConfigureTheme from './utilities/ConfigureTheme';

function App() {
  return (
    <div className="App" >
      <ConfigureTheme>
        <Suspense fallback={<SpinnerFallback />}>
          <BrowserRouter>
            <Header />
            <RoutesNotFound>
              <Route index element={<MainHome />} />
              <Route path={`${PublicRoutes.CALCULATOR}/*`} element={<RoutesCalculator />} />
              <Route path={`${PublicRoutes.TOPICS}/*`} element={<RoutesTopics />} />
              <Route path={`${PublicRoutes.DISTRIBUTION_TABLES}/*`} element={<RoutesDistributions />} />
              <Route path={PublicRoutes.SYMBOLS} element={<SearchSymbol />} />
            </RoutesNotFound>
            <Footer />
          </BrowserRouter>
        </Suspense>
      </ConfigureTheme>
    </div>
  )
}

export default App;