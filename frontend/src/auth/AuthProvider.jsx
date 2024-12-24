import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useauth";
import PropTypes from 'prop-types';


const AuthenticatedRoute = ({ children }) => {
    const { user } = useAuth();
  
    return user ? children : <Navigate to="/sign-in" />;
};

AuthenticatedRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AuthenticatedRoute;

  
/* const AnonymousRoute = ({ children }) => {
    const { user } = useAuth();

    return user ? <Navigate to="/" /> : children;
}; */