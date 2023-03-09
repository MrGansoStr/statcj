import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
const SearchSymbol = lazy(() => import('./pages/SearchSymbol/SearchSymbol'));
import RoutesNotFound from './utilities/RoutesNotFound';
import Header from './StyledComponents/Header/Header';
import Footer from './StyledComponents/Footer/Footer';
import { PrivateRoutes, PublicRoutes } from './models/routes';
import SpinnerFallback from './utilities/SpinnerFallback';
const MainHome = lazy(() => import('./pages/MainHome/MainHome'));
import RoutesCalculator from './Routes/RoutesCalculator';
import RoutesTopics from './Routes/RoutesTopics';
import RoutesDistributions from './Routes/RoutesDistributions';
import ConfigureTheme from './utilities/ConfigureTheme';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RecoveryPassword from './pages/RecoveryPassword/RecoveryPassword';
import { Provider } from 'react-redux';
import UserStore from './redux/StoreUser';
import AuthGuard from './guards/AuthGuard';
import RoutesPrivate from './Routes/RoutesPrivate';
const Comments = lazy(() => import('./pages/PublicPages/Comments/Comments'));

function App() {
  return (
    <div className="App" >
      <ConfigureTheme>
        <Suspense fallback={<SpinnerFallback />}>
          <Provider store={UserStore}>
            <BrowserRouter>
              <Header />
              <RoutesNotFound>
                <Route index element={<MainHome />} />
                <Route path={`${PublicRoutes.CALCULATOR}/*`} element={<RoutesCalculator />} />
                <Route path={`${PublicRoutes.TOPICS}/*`} element={<RoutesTopics />} />
                <Route path={`${PublicRoutes.DISTRIBUTION_TABLES}/*`} element={<RoutesDistributions />} />
                <Route path={PublicRoutes.SYMBOLS} element={<SearchSymbol />} />
                <Route path={PublicRoutes.COMMENTS} element={<Comments/>} />
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
                <Route path={PublicRoutes.REGISTER} element={<Register />} />
                <Route path={PublicRoutes.RECOVERY} element={<RecoveryPassword />} />
                <Route element={<AuthGuard IsPrivate={true} />} >
                  <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<RoutesPrivate />} />
                </Route>
              </RoutesNotFound>
              <Footer />
            </BrowserRouter>
          </Provider>
        </Suspense>
      </ConfigureTheme>
    </div>
  )
}

export default App;