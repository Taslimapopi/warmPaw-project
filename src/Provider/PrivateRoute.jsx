import React, { use } from 'react';
import { AuthContext } from './Authprovider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    // console.log(user)

    if(loading){
     return   <span className="loading loading-dots loading-md"></span>
    }

    if(user && user?.email){
        return children
    }
    return <Navigate to='/auth/login'></Navigate>
    
    
};

export default PrivateRoute;