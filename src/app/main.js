/*! React Alt Firebase Starter */

import React from 'react';
import router from './router';

require('./../styles/main.less');
require('./../vendor/css/materialize.css');

router.run((Handler, state) => {
  React.render(<Handler />, document.getElementById('container'));
});
