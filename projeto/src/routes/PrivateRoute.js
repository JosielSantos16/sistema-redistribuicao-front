import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('@Wolf:token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}