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
    },
    link: function(scope, elem, attr){
      console.log(scope)
      scope.$watch('socialStatusCtrl.bombs', function(){
        console.log('elem', elem)
      })
    },
  }
})
