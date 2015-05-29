import AppConstants from '../constants/AppConstants';
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var PayloadSource = AppConstants.PayloadSource;

var AppDispatcher = assign(new Dispatcher(), {

  handleServerAction: function(action) {
    var payload = {
      source: PayloadSource.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

});

module.exports = AppDispatcher;
