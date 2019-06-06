import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Hello World!! Auto Deployment Test';

ReactDOM.render(
  <div>{title}</div>, 
  document.getElementById('app')
);

module.hot.accept();
