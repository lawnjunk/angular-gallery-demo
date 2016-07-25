'use strict'

const angular = require('angular')

angular.module('demoApp')
.factory('imageService', function(){
  const images = []
  const addImage = function(img){
    this.images.push(img)
  }

  const removeImageWithImgUrl = function(imgUrl){
    this.images = images.filter((img) => {
      if (img.imgUrl === imgUrl) return false
      return true
    })
  }

  return {
    images,
    addImage,
    removeImageWithImgUrl,
  }
})

