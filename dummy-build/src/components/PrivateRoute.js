// PrivateRoute for our Protected Route waiting for the main route that  we want to push it to.

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => {
    
    return(
        <Route
            {...rest}
            render={() => {
                if(localStorage.getItem("token")){
                    return <Component />
                }else{
                    return<Redirect to="/" />
                }
            }}
        />
    )
}
export default PrivateRoute;