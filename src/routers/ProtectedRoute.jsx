import { Navigate, Outlet} from "react-router-dom";
import PropTypes from 'prop-types';

const ProtectedRoute = ({ authData }) => {
    if(!authData.isLoggedIn) {
        return <Navigate to = "/login" replace />; 
    } 
    return <Outlet />;
}

ProtectedRoute.propTypes = {
    authData: PropTypes.object,
    children: PropTypes.any
}

export default ProtectedRoute;

