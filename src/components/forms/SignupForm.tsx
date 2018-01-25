import * as React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { isEmail } from 'validator';
import InlineError from '../messages/InlineError';
import { Credentials } from '../../types';

interface SignupFormProps {
  submit: (data: Credentials) => Promise<any>;
}
interface SignupFormState {
  data: Credentials;
  loading: boolean;
  errors: {[key: string]: string};
}
class SignupForm extends React.Component<SignupFormProps, SignupFormState> {

  constructor(props: SignupFormProps) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: ''
      },
      loading: false,
      errors: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  onChange(e: any) {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  }
  onSubmit() {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (!Object.keys(errors).length) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err => this.setState({ errors: err.response.data.errors, loading: false }));
    }
  }
  validate(data: Credentials) {
    const errors: any = {};
    if (!isEmail(data.email)) {
      errors.email = 'Invalid email';
    }
    if (!data.password) {
      errors.password = 'Cant be blank';
    }
    return errors;
  }
  render() {
    const { data, loading } = this.state;
    const errors: any = this.state.errors;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
      <Form.Field error={!!errors && errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors && errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors && errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors && errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button primary={true}>Signup</Button>
      </Form>
    );
  }
}

export default SignupForm;
