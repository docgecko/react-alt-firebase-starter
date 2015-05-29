import keyMirror from 'keymirror';

module.exports = {

  ActionTypes: keyMirror({
    RECEIVE_USER: null,
    USER_LOADING: null,
    USER_FINISHED_LOADING: null,
  }),

  PayloadSource: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
