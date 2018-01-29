import * as React from 'react';
import { User } from '../types';

export interface Props {
  users: User[];
}

const Sidebar = ({ users }: Props) => (
  <aside id="sidebar" className="sidebar">
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
