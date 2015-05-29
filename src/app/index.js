/*! React Alt Firebase Starter */

import React from 'react';
import router from './config/router';
import Alt from './config/alt';

require('./../styles/main.less');

router.run((Handler, state) => {
  React.render(<Handler {...state} />, document.body);
});
