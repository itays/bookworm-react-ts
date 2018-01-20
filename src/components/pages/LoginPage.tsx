import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { loginThunk } from '../../actions/auth';
import { Credentials } from '../../types';

type History = {
  push: (url: string) => void;
};

interface LoginPageProps {
  history: History;
  login: (data: any) => Promise<any>;
}

class LoginPage extends React.Component<LoginPageProps, {}> {
  constructor(props: LoginPageProps) {
    super(props);
    this.submit = this.submit.bind(this);
  }
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

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    login: (credentials: Credentials) => dispatch(loginThunk(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
