import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';

const InfoBar = (props) => (
  <div>
    <div>
      <img src={onlineIcon} alt='online image' />
      <h3>{props.room}</h3>
    </div>
    <div>
      <a href='/'>
        <img src={closeIcon} alt='close image' />
      </a>
    </div>
  </div>
);

export default InfoBar;
