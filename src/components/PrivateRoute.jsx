import React from 'react';
import { Route, Redirect } from 'react-router-dom'

export default ({ render: Component, ...rest }) => (
      <Route {...rest} render={props =>
        localStorage.getItem('authData') ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: {from: props.location }
            }}/>
        )
    }/>
);