import { connect } from 'react-redux';
import MessagesListComponent from '../components/MessagesList';
import { StoreState } from '../types';

export const MessagesList = connect((state: StoreState) => ({
  messages: state.messages
}))(MessagesListComponent);
