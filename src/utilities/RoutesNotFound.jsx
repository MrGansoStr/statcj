import { Route, Routes } from "react-router-dom";
import NotFoundPage from './../StyledComponents/NotFoundPage/NotFoundPage';


function RoutesNotFound({children}) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
}
export default RoutesNotFound;