import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth"

const RequireAuth = ({ children }) => {
    const location = useLocation()
    const Auth = useAuth();
    if (!Auth.user) {
        return <Navigate to='/login' state={{ path: location.pathname }} />
    }
    return children;
}

export default RequireAuth