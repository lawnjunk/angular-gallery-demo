'use strict'

const angular = require('angular')

angular.module('demoApp')
.directive('appSocialStatus', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./social-status.html'),
    controller: 'SocialStatusController',
    controllerAs: 'socialStatusCtrl',
    bindToController: true,
    scope: {
      hearts: '=', 
      bombs: '=',
    }
  }
})
