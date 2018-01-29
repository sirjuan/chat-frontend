import { combineReducers } from 'redux';
import messages from './messages';
import users from './users';
import { StoreState } from '../types';

const chat = combineReducers<StoreState>({
  messages,
  users
});

export default chat;
