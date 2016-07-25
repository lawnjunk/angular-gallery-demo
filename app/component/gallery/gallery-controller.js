'use strict'

const angular = require('angular')
angular.module('demoApp').controller('GalleryController', ['imageService', GalleryController])

function GalleryController(imageService){
  this.galleryStyle = 'list'
  imageService.addImage({
    title: 'gulp orchid', 
    desc: 'this is a demo',
    imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    bombs: 2,
    hearts: 23,
  })

  imageService.addImage({
    title: 'lulwat lilly', 
    desc: 'this is an image of a flower found on mount lulwat',
    imgUrl: require('../../asset/img/flower/flower-1.jpg'),
    bombs: 34,
    hearts: 2,
  })

  console.log(imageService)
  this.images = imageService.images
  this.selectGalleryStyle = function(style){
    if (style === 'list' || style === 'thumb' || style === 'image')
      this.galleryStyle = style
    return this.galleryStyle
  }
}
