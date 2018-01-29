import * as React from 'react';
import './App.css';
import { Sidebar } from './containers/Sidebar';
import { MessagesList } from './containers/MessagesList';
import { AddMessage } from './containers/AddMessage';

class App extends React.Component<object, object> {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
