import { Route } from "react-router-dom";
import RoutesNotFound from "../utilities/RoutesNotFound";
import { lazy } from 'react';
const AccountInfo = lazy(() => import('../pages/Private/Account/AccountInfo'));

function RoutesPrivate() {
  return (
    <RoutesNotFound>
      <Route index element={<AccountInfo/>} />
    </RoutesNotFound>
  )
}
export default RoutesPrivate;