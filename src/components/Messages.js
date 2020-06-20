import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

const Messages = (props) => (
  <ScrollToBottom>
    {props.messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={props.name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
