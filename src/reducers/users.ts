import * as types from '../constants/ActionTypes';
import * as actions from '../actions';

export type Actions = actions.AddUser | actions.PopulateUsersList;

export interface User {
  name: string;
  id: number;
}

const users = (state: User[] = [], action: Actions) => {
  switch (action.type) {
    case types.ADD_USER:
      return state.concat([{ name: action.name, id: action.id }]);
    case types.USERS_LIST:
      return action.users;
    default:
      return state;
  }
};

export default users;
