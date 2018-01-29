import * as React from 'react';

export interface Props {
  addMessage: (message: string, author: string) => void;
}

const AddMessage = ({addMessage}: Props) => {

  let input: any;

  return (
    <section id="new-message">
      <input
        onKeyPress={(e) => {
        if (e.key === 'Enter') {
          addMessage(input.value, 'Me');
          input.value = '';
        }
      }}
        type="text"
        ref={(node) => {
        input = node;
      }}
      />
    </section>
  );
};

export default AddMessage;
