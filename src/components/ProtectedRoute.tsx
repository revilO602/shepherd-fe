import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../api/auth/useUser";

const ProtectedRoute = ({ children }) => {
  const { data } = useUser();
  const location = useLocation();
  if (!data?.access_token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};
export default ProtectedRoute;
