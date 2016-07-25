'use strict'

const angular = require('angular')

angular.module('demoApp')
.directive('appImgItem', function(){
  return {
    restrict: 'E',
    replace: true,
    tempelate: require('./img-item.html'),
    scope: {
      title: '@',
      imgUrl: '@',
      desc: '@',
    }
  }
})
