/*
 * Modified version of the following from Github to account for strick mode:
 * https://github.com/RisingStack/react-way-getting-started/blob/master/tools/preprocessor.js
 *
 */
 
(function () {
   'use strict';

   var babel = require('babel-core');

   module.exports = {
     process: function(src, filename) {
       // Ignore files other than .js, .es, .jsx or .es6
       if (!babel.canCompile(filename)) {
         return '';
       }
       // Ignore all files within node_modules
       if (filename.indexOf('node_modules') === -1) {
         return babel.transform(src, {filename: filename}).code;
       }
       return src;
     }
   };
}());
