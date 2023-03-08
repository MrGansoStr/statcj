
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { PublicRoutes } from '../models/routes';

const PrivateFragment = <Outlet />
const PublicFragment = <Navigate replace to={PublicRoutes.LOGIN} />

const AuthGuard = ({ IsPrivate }) => {
  const userState = useSelector(store => store.user);
  return userState.username ? (
    IsPrivate ? (
      PrivateFragment
    ) :
      (
        PublicFragment
      )
  ) :
    (
      PublicFragment
    )
}

export default AuthGuard;