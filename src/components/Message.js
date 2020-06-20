import React from 'react';

import ReactEmoji from 'react-emoji';

const Message = (props) => {
  let isSentByCurrentUser = false;
  const trimmedName = props.name.trim().toLowerCase();
  if (props.message.user === trimmedName) isSentByCurrentUser = true;
  if (isSentByCurrentUser)
    return (
      <div>
        <p>{trimmedName}</p>
        <div>
          <p>{ReactEmoji.emojify(props.message.text)}</p>
        </div>
      </div>
    );
  return (
    <div>
      <p>{ReactEmoji.emojify(props.message.text)}</p>
      <div>
        <p>{props.message.user}</p>
      </div>
    </div>
  );
};

export default Message;
