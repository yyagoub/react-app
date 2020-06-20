import React from 'react';

const Input = (props) => (
  <form>
    <input
      type='text'
      placeholder='type a message...'
      value={props.message}
      onChange={(event) => props.setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === 'Enter' ? props.sendMessage(event) : null
      }
    />
    <button onClick={(event) => props.sendMessage(event)}>Send</button>
  </form>
);

export default Input;
