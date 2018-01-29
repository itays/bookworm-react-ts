import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { History, ActionTypes } from '../../types';
import SignupForm from '../forms/SignupForm';
import { signupThunk } from '../../actions/';
import { Credentials } from '../../types';

interface SignupPageProps {
  history: History;
  signup: (data: Credentials) => Promise<any>;
}

export interface Credentials {
  email: string;
  password: string;
}

class SignupPage extends React.Component<SignupPageProps, any> {
  constructor(props: SignupPageProps) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(data: Credentials): Promise<any> {
    return this.props.signup(data).then(() => this.props.history.push('/dashboard'));
  }

  render() {
    return (
      <div>
        <SignupForm submit={this.submit}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes.USER_SIGNUP>) => {
  return {
    signup: (credentials: Credentials) => dispatch(signupThunk(credentials))
  };
};

export default connect(null, mapDispatchToProps)(SignupPage);
