import React, { use } from 'react';
import { AuthContext } from './Authprovider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)

    const location = useLocation()
    // console.log(user)

    if(loading){
     return   <span className="loading loading-dots loading-md"></span>
    }

    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    
    
};

export default PrivateRoute;