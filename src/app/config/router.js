/*! React Alt Firebase Starter */

import ReactRouter from 'react-router';
import routes from '../routes';

let router = ReactRouter.create({
    location : ReactRouter.HashLocation,
    routes : routes
});

export default router;
