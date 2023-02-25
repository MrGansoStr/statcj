import { lazy } from "react";
import { Route } from "react-router-dom";
import { DistTablesRoutes } from "../models/routes";
import GoHomePath from "../StyledComponents/GoHomePath/GoHomePath";
import RoutesNotFound from "../utilities/RoutesNotFound";
const MainDistributionTables = lazy(() => import("../pages/DistributionTables/MainDistributionTables"));
const SearchValueZ = lazy(() => import('./../pages/DistributionTables/SearchValueZ/SearchValueZ'));

function RoutesDistributions() {
  return (
    <RoutesNotFound>
      <Route index element={<MainDistributionTables />} />
      <Route element={<GoHomePath />} >
        <Route path={DistTablesRoutes.DISTZ} element={<SearchValueZ />} />
      </Route>
    </RoutesNotFound>
  );
}
export default RoutesDistributions;