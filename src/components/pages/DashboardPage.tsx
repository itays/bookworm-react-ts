import * as React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../types';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';

interface DashBoardPageProps {
  isConfirmed: boolean;
}

const DashBoardPage = ({isConfirmed}: DashBoardPageProps) => (
  <div>{!isConfirmed && <ConfirmEmailMessage />}</div>
);

const mapStateToProps = (state: StoreState) => ({
  isConfirmed: !!state.user.confirmed
});
export default connect(mapStateToProps)(DashBoardPage);