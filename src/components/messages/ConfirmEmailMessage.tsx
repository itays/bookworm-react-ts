import * as React from 'react';
import { Message } from 'semantic-ui-react';

const ConfirmEmailMessage = () => {
  return (
    <Message info={true}>
      <Message.Header>Please verify your email</Message.Header>
    </Message>
  );
};

export default ConfirmEmailMessage;