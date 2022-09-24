import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import { selectCurrentToken } from "../StateManager/auth/authSlice";

const RequireAuth = () => {
  // const { auth } = useAuth();
  const location = useLocation();
  const token = useSelector(selectCurrentToken)

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
