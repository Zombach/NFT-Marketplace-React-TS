import { Navigate, Outlet } from 'react-router-dom';
import { selectIsAuth } from '@pages/LogIn/AuthSlice';
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
