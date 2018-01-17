import * as React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { loginThunkAction } from '../../actions/auth';

type History = {
  push: (url: string) => void;
};

interface LoginPageProps {
  history: History;
  login: (data: any) => Promise<any>;
}

class LoginPage extends React.Component<LoginPageProps, {}> {
  submit(data: any) {
    this.props.login(data).then(() => this.props.history.push('/'));
  }
  render() {
    return (
      <div>
        <h1>Login page</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default connect(null, { login: loginThunkAction })(LoginPage);
