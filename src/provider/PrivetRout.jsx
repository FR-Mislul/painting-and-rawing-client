import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRout = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex flex-col m-8 rounded shadow-md w-full mx-auto sm:w-80 animate-pulse h-96">
            <div className="h-48 rounded-t dark:bg-gray-300"></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
                <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
            </div>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>;
};

export default PrivetRout;