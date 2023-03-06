import { Route } from "react-router-dom";
import { TopicsRoutes } from "../models/routes";
import { lazy } from "react";
import RoutesNotFound from "../utilities/RoutesNotFound";
const MainTopicTheory = lazy(() => import("../pages/TopicTheory/MainTopicTheory"));
const MediaTheory = lazy(() => import("../pages/TopicTheory/Media/MediaTheory"));
const MedianaTheory = lazy(() => import("../pages/TopicTheory/Mediana/MedianaTheory"));
const ModaTheory = lazy(() => import("../pages/TopicTheory/Moda/ModaTheory"));
const VarianceTheory = lazy(() => import("../pages/TopicTheory/Variance/VarianceTheory"));
const ErrorTheory = lazy(() => import('./../pages/TopicTheory/Error/ErrorTeory'));
import GoHomePath from "../StyledComponents/GoHomePath/GoHomePath";

function RoutesTopics() {
  return (
    <RoutesNotFound>
      <Route index element={<MainTopicTheory />} />
      <Route element={<GoHomePath />} >
        <Route path={TopicsRoutes.MEDIA} element={<MediaTheory />} />
        <Route path={TopicsRoutes.MEDIANA} element={<MedianaTheory />} />
        <Route path={TopicsRoutes.MODA} element={<ModaTheory />} />
        <Route path={TopicsRoutes.VARIANCE} element={<VarianceTheory />} />
        <Route path={TopicsRoutes.ERROR} element={<ErrorTheory />} />
      </Route>
    </RoutesNotFound>
  );
}
export default RoutesTopics;