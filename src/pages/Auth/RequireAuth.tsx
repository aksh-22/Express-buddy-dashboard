import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

function RequireAuth({ children }: Props) {
  const isAuthenticated = useSelector(
    (state: any) => state.appReducer?.isAuthenticated
  );

  // const location = useLocation();

  if (!isAuthenticated) {
    // return <Navigate to="/" state={{ from: location }} replace />;
    return <Navigate to="/" />;
  }
  return children;
}

export default RequireAuth;
