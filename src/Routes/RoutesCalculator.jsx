import { Route } from "react-router-dom";
import { CalculatorRoutes } from "../models/routes";
import { lazy } from "react";
const MainCalculator = lazy(() => import("../pages/Calculator/MainCalculator"));
const GoHomePath = lazy(() => import("../StyledComponents/GoHomePath/GoHomePath"));
const FrecuencyTables = lazy(() => import('./../pages/Calculator/FrecuencyTables/FrecuencyTables'));
const Mct = lazy(() => import('./../pages/Calculator/MCT/Mct'));
const VarianceAndError = lazy(() => import('./../pages/Calculator/VarianceAndError/VarianceAndError'));
const Percentiles = lazy(() => import('./../pages/Calculator/Percentiles/Percentiles'));
import RoutesNotFound from "../utilities/RoutesNotFound";

function RoutesCalculator() {
  return (
    <RoutesNotFound>
      <Route index element={<MainCalculator />} />
      <Route element={<GoHomePath />}>
        <Route path={CalculatorRoutes.FRECUENCY_TABLES} element={<FrecuencyTables />} />
        <Route path={CalculatorRoutes.MCT} element={<Mct />} /> 
        <Route path={CalculatorRoutes.VARIANCE} element={<VarianceAndError />} />
        <Route path={CalculatorRoutes.PERCENTILES} element={<Percentiles />} />
      </Route>
    </RoutesNotFound>
  );
}
export default RoutesCalculator;