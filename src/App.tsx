import * as React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import UserRoute from './components/routes/UserRoute';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Route exact={true} path="/" component={HomePage}/>
        <Route exact={true} path="/login" component={LoginPage}/>
        <UserRoute exact={true} path="/dashboard" component={DashboardPage}/>
      </div>
    );
  }
}

export default App;
