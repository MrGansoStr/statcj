import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes } from '../models/routes';

const PrivateFragment =  <Navigate replace to={`/${PrivateRoutes.PRIVATE}`} />
const PublicFragment = <Outlet />

const LoggedGuard = (isLogged) => {
  const userState = useSelector(store => store.user);

  return isLogged ? (
    <Outlet/>
  ) : (
    <Navigate to='/login'/>
  );
}
export default LoggedGuard;