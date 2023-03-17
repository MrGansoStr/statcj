import { Route } from "react-router-dom";
import RoutesNotFound from "../utilities/RoutesNotFound";
import { lazy } from 'react';
import LoggedGuard from "../guards/LoggedGuard";
const AccountInfo = lazy(() => import('../pages/Private/Account/AccountInfo'));

function RoutesPrivate() {
  return (
    <RoutesNotFound>
      <Route element={<LoggedGuard isLogged={true}/>}>
        <Route index element={<AccountInfo />} />
      </Route>
    </RoutesNotFound>
  )
}
export default RoutesPrivate;