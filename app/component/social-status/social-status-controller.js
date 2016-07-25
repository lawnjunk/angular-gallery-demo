'use strict'

const angular = require('angular')

angular.module('demoApp').controller('SocialStatusController', [SocialStatusController])

function SocialStatusController(){
  this.bombDirty = false
  this.heartDirty = false

  this.bombClick = function(){
    if (this.heartDirty) return

    if (this.bombDirty) {
      this.bombs--
      this.bombDirty = false
      return
    }

    this.bombs++
    this.bombDirty = true
  }

  this.heartClick = function(){
    if (this.bombDirty) return 

    if (this.heartDirty) {
      this.hearts--
      this.heartDirty = false 
      return
    }

    this.hearts++
    this.heartDirty = true

  }
}
