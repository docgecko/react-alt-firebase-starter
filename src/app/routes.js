var React = require('react');
var { Route, DefaultRoute } = require('react-router');

var App = require('./components/App/App');

var routes = (
    <Route name="home" path='/' handler={App}>
    </Route>
);

module.exports = routes;