import { Navigate, Outlet } from "react-router-dom";

const LoggedGuard = (isLogged) => {
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default LoggedGuard;
