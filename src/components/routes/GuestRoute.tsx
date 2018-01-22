import * as React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../types';
import { Route, Redirect } from 'react-router-dom';
import { BaseRouteProps } from './BaseRouteProps'; 

const GuestRoute = (props: BaseRouteProps) => {
  const { isAuthenticated , component: Component, ...rest} = props;

  return (
    <Route {...rest} render={prop => !isAuthenticated ? <Component {...prop}/> : <Redirect to="/dashboard" />}/>
  );
};

const mapStateToProps = (state: StoreState) => ({
  isAuthenticated: !!state.user.token,
});

export default connect(mapStateToProps)(GuestRoute);