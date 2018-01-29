import { Dispatch } from 'react-redux';
import * as ActionTypes from '../constants/ActionTypes';
import * as actions from '../actions';
import * as types from '../types';

const { addUser, messageReceived, populateUsersList } = actions;

export type ValidActions = actions.AddUser | actions.MessageReceived | actions.PopulateUsersList | actions.AddMessage;

export type DataTypes = types.Message | types.User | types.UserList;

const setupSocket = (dispatch: Dispatch<ValidActions>, username: string) => {
  const socket = new WebSocket('ws://localhost:8989');

  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: ActionTypes.ADD_USER,
      name: username
    }));
  };
  socket.onmessage = (event) => {
    const data: ValidActions = JSON.parse(event.data);
    switch (data.type) {
      case ActionTypes.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author));
        break;
      case ActionTypes.ADD_USER:
        dispatch(addUser(data.name));
        break;
      case ActionTypes.USERS_LIST:
        dispatch(populateUsersList(data.users));
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;
