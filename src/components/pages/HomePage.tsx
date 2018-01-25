import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect, Dispatch } from 'react-redux';
import { StoreState, ActionTypes } from '../../types';
import { logoutThunk } from '../../actions/auth';
interface HomePageProps {
  isAuthenticated: boolean;
  logout: () => void;
}
const HomePage = ({ isAuthenticated, logout }: HomePageProps) => {
  return (
    <div>
      <h1>Home page</h1>
      {isAuthenticated ? <button onClick={() => logout()}>Logout</button> : 
      <div><Link to="/login">Login</Link> or <Link to="/signup">Signup</Link></div>}
    </div>
  );
};
const mapStateToProps = (state: StoreState) => {
  return {
    isAuthenticated: !!state.user.token
  };
};
const mapDispatchToProps = (dispatch: Dispatch<ActionTypes.USER_LOGGED_OUT>) => {
  return {
    logout: () => dispatch(logoutThunk())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);