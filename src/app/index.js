/*! React Alt Firebase Starter */

import React from 'react';
import router from './config/router';

require('./../styles/main.less');

router.run((Handler, state) => {
  React.render(<Handler {...state} />, document.body);
});
