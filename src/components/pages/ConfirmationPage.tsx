import * as React from 'react';
import { Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect, Dispatch } from 'react-redux';
import { confirmThunk } from '../../actions';

interface ConfirmationPageProps {
  confirm: (token: string) => Promise<any>;
  match: { params: { token: string } };
}
interface ConfirmationPageState {
  loading: boolean;
  success: boolean;
}
class ConfirmationPage extends React.Component<ConfirmationPageProps, ConfirmationPageState> {
  constructor(props: ConfirmationPageProps) {
    super(props);
    this.state = {
      loading: true,
      success: false
    };
  }
  componentDidMount() {
    this.props.confirm(this.props.match.params.token).then(() => {
      this.setState({ loading: false, success: true});
    }).catch(() => this.setState({ loading: false, success: false }));
  }
  render() {
    const { loading, success } = this.state;
    return (
      <div>
        {loading && 
        <Message icon={true}>
          <Icon name="circle notched" loading={true} />
          <Message.Header>Validating your email</Message.Header>
        </Message>}

        {!loading && success && (
          <Message success={true} icon={true}>
            <Icon name="checkmark" />
            <Message.Content>
              <Message.Header>
                Thank you. your account has been verified.
              </Message.Header>
              <Link to="/dashboard">Go to your dashboard</Link>
            </Message.Content>
          </Message>
        )}

        {!loading && !success && (
          <Message negative={true} icon={true}>
            <Icon name="warning sign"/>
            <Message.Content>
              <Message.Header>Oops. invalid token it seems.</Message.Header>
            </Message.Content>
          </Message>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  confirm: (token: string) => dispatch(confirmThunk(token))
});
export default connect(null, mapDispatchToProps)(ConfirmationPage);