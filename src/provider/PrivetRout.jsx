import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRout = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <div className="w-16 h-16 mt-56 m-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }

    if(user) {
        return children;
    }
    return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>;
};

export default PrivetRout;