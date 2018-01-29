import { connect } from 'react-redux';
import SidebarComponent from '../components/Sidebar';
import { StoreState } from '../types';

export const Sidebar = connect((state: StoreState) => ({
  users: state.users
}))(SidebarComponent);
