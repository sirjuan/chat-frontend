export interface StoreState {
    users: User[];
    messages: Message[];
}

export interface Message {
  message: string;
  author: string;
  id: number;
}

export interface User {
  name: string;
  id: number;
}

export interface UserList {
  users: User[];
}
