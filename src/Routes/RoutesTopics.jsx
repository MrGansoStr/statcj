import { Route } from "react-router-dom";
import { TopicsRoutes } from "../models/routes";
import { lazy } from "react";
import RoutesNotFound from "../utilities/RoutesNotFound";
const MainTopicTeory = lazy(() => import("../pages/TopicTeory/MainTopicTeory"));
const MediaTeory = lazy(() => import("../pages/TopicTeory/Media/MediaTeory"));
const MedianaTeory = lazy(() => import("../pages/TopicTeory/Mediana/MedianaTeory"));
const ModaTeory = lazy(() => import("../pages/TopicTeory/Moda/ModaTeory"));
const VarianceTeory = lazy(() => import("../pages/TopicTeory/Variance/VarianceTeory"));
const ErrorTeory = lazy(() => import('./../pages/TopicTeory/Error/ErrorTeory'));
import GoHomePath from "../StyledComponents/GoHomePath/GoHomePath";

function RoutesTopics() {
  return (
    <RoutesNotFound>
      <Route index element={<MainTopicTeory />} />
      <Route element={<GoHomePath />} >
        <Route path={TopicsRoutes.MEDIA} element={<MediaTeory />} />
        <Route path={TopicsRoutes.MEDIANA} element={<MedianaTeory />} />
        <Route path={TopicsRoutes.MODA} element={<ModaTeory />} />
        <Route path={TopicsRoutes.VARIANCE} element={<VarianceTeory />} />
        <Route path={TopicsRoutes.ERROR} element={<ErrorTeory />} />
      </Route>
    </RoutesNotFound>
  );
}
export default RoutesTopics;