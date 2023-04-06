import { Navigate, Outlet } from 'react-router-dom';
// import { getLocalStorageAccessToken } from '../utils/store';

interface PrivateRouteProps {
  authentication: boolean;
}

export default function PrivateRoute({
  authentication
}: PrivateRouteProps): React.ReactElement | null {
  // const isToken = getLocalStorageAccessToken();
  const isToken = 'getToken';

  if (authentication) {
    return isToken ? <Outlet /> : <Navigate to="/signin" />;
  }
  return isToken ? <Navigate to="/" /> : <Outlet />;
}
