import { takeEvery } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import * as actions from '../actions';

export interface Params {
  username: string;
  socket: WebSocket;
}

const handleNewMessage = function* (params: Params) {
  yield takeEvery(types.ADD_MESSAGE, (action: actions.AddMessage) => {
    action.author = params.username;
    params.socket.send(JSON.stringify(action));
  });
};

export default handleNewMessage;
