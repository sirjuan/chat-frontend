import * as types from '../constants/ActionTypes';
import { User } from '../types';

let nextMessageId: number = 0;
let nextUserId: number = 0;

export interface AddMessage {
  type: types.ADD_MESSAGE;
  id: number;
  message: string;
  author: string;
}

export interface AddUser {
  type: types.ADD_USER;
  id: number;
  name: string;
}

export interface MessageReceived {
  type: types.MESSAGE_RECEIVED;
  id: number;
  message: string;
  author: string;
}

export interface PopulateUsersList {
  type: types.USERS_LIST;
  users: User[];
}

export const addMessage = (message: string, author: string) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
});

export const addUser = (name: string) => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
});

export const messageReceived = (message: string, author: string) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
});

export const populateUsersList = (users: User[]) => ({
  type: types.USERS_LIST,
  users
});
