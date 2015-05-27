/*! React Alt Firebase Starter */

// import React from 'react';
// import { Route } from 'react-router';
// import App from '../../../../screens/Shared/screens/App/components/App';
// import Home from '../Home/components/Home';
//
// let routes = (
//   <Route handler={App}>
//     <Route name="home" handler={Home}/>
//   </Route>
// );
//
// export default routes;

import React from 'react';
import { Route, DefaultRoute, NotFoundRoute, Redirect } from 'react-router';
import App from '../App/components/App';

let routes = (
  <Route path='/' handler={App}>
    <Route name="home" path='/' handler={Home}/>
  </Route>
);

router.run((Handler, state) => {
  React.render(<Handler />, document.body);
});
