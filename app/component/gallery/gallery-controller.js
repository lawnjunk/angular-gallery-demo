'use strict'

const angular = require('angular')
angular.module('demoApp').controller('GalleryController', ['imageService', GalleryController])

function GalleryController(imageService){
  this.galleryStyle = 'image'
  imageService.addImage({
    title: 'gulp orchid', 
    desc: 'this is a demos flkjs flkjsd flksjdf lksjfd lksdjf lksdjf lksdj lksfjd',
    imgUrl: require('../../asset/img/flower/flower-2.jpg'),
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
  imageService.addImage({
    title: 'gulp orchid', 
    desc: 'this  sldkfj lsdkjf sldkfj sdlkfj sdlkfj sdlfj sldkjf sldkjf sldjf lsdkjf lsdjf lsdjf lskdjf lsdjfsldfkj sldfkj sdlkfj sdlkjis a demo',
    imgUrl: require('../../asset/img/flower/flower-5.jpg'),
    bombs: 2,
    hearts: 23,
  })

  imageService.addImage({
    title: 'gulp orchid', 
    desc: 'this is a demo',
    imgUrl: require('../../asset/img/flower/flower-6.jpg'),
    bombs: 2,
    hearts: 23,
  })

  imageService.addImage({
    title: 'gulp orchid', 
    desc: 'this sfdkjl sdflsdnf is a demo',
    imgUrl: require('../../asset/img/flower/flower-8.jpg'),
    bombs: 2,
    hearts: 23,
  })

  imageService.addImage({
    title: 'gulp orchid', 
    desc: 'sldkfj sldkfj lkj lsdfkj linthis is a demo',
    imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    bombs: 2,
    hearts: 23,
  })

  imageService.addImage({
    title: 'gulp orchid', 
    desc: 'sldkjf lkjsdf lkjsd flksdj fthis is a demo',
    imgUrl: require('../../asset/img/flower/flower-9.jpg'),
    bombs: 2,
    hearts: 23,
  })

  imageService.addImage({
    title: 'gulp orchid', 
    desc: 'lskjfd lkdsjf lskdfnnnjthis is a demo',
    imgUrl: require('../../asset/img/flower/flower-6.jpg'),
    bombs: 2,
    hearts: 23,
  })

  imageService.addImage({
    title: 'gulp orchid', 
    desc: 'this is a demo',
    imgUrl: require('../../asset/img/flower/flower-7.jpg'),
    bombs: 2,
    hearts: 23,
  })

  imageService.addImage({
    title: 'gulp orchid', 
    desc: 'sldfkj sdfthis is a demo',
    imgUrl: require('../../asset/img/flower/flower-3.jpg'),
    bombs: 2,
    hearts: 23,
  })

  imageService.addImage({
    title: 'gulp orchid', 
    desc: 'lskjf lsdkjf lsdkjf this is a demo',
    imgUrl: require('../../asset/img/flower/flower-7.jpg'),
    bombs: 2,
    hearts: 23,
  })

  imageService.addImage({
    title: 'gulp orchid', 
    desc: 'this is a demo',
    imgUrl: require('../../asset/img/flower/flower-9.jpg'),
    bombs: 2,
    hearts: 23,
  })

  console.log(imageService)
  this.images = imageService.images
  this.selectGalleryStyle = function(style){
    if (style === 'list' || style === 'thumb' || style === 'image')
      this.galleryStyle = style
    return this.galleryStyle
  }
}
