'use strict'

require('angular').module('demoApp')
.directive('appMain', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: true,
    template: require('./main.html')
  }
})
