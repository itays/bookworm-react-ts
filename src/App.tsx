import * as React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
interface AppProps {
  location?: any;
}
const App = (props: AppProps) => {
  const { location } = props;
  return (
    <div className="ui container">
      <Route location={location} exact={true} path="/" component={HomePage}/>
      <GuestRoute location={location} exact={true} path="/login" component={LoginPage}/>
      <UserRoute location={location} exact={true} path="/dashboard" component={DashboardPage}/>
    </div>
  );
};

export default App;
