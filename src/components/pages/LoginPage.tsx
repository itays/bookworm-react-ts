import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { loginThunk } from '../../actions/auth';
import { Credentials, History } from '../../types';

interface LoginPageProps {
  history: History;
  login: (data: any) => Promise<any>;
}

class LoginPage extends React.Component<LoginPageProps, {}> {
  constructor(props: LoginPageProps) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(data: any): Promise<any> {
    return this.props.login(data).then(() => this.props.history.push('/dashboard'));
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

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    login: (credentials: Credentials) => dispatch(loginThunk(credentials))
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
