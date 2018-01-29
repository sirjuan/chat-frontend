import * as actions from '../actions';

export type Actions = actions.MessageReceived | actions.AddMessage;

export interface Message {
  message: string;
  author: string;
  id: number;
}

const messages = (state: Message[] = [], action: Actions) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
    case 'MESSAGE_RECEIVED':
      return state.concat(
        {
          message: action.message,
          author: action.author,
          id: action.id
        }
      );
    default:
      return state;
  }
};

export default messages;
