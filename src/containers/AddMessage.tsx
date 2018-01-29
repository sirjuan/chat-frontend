import AddMessageComponent from '../components/AddMessage';
import * as actions from '../actions';
import { connect, Dispatch } from 'react-redux';

const mapDispatchToProps = (dispatch: Dispatch<actions.AddMessage>) => ({
  addMessage: (message: string, author: string) => {
    dispatch(actions.addMessage(message, author));
  }
});

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent);
