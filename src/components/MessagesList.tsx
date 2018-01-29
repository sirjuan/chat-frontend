import * as React from 'react';
import Message from './Message';
import { Message as MessageType } from '../types';

export interface Props {
  messages: MessageType[];
}

const MessagesList = ({ messages }: Props) => (
  <section id="messages-list">
    <ul>
    {messages.map(message => (
      <Message
        key={message.id}
        {...message}
      />
    ))}
    </ul>
  </section>
);

export default MessagesList;
