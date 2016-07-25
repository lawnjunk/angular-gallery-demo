'use strict'

const angular = require('angular')
angular.module('demoApp').controller('GalleryController', ['imageService', GalleryController])

function GalleryController(imageService){
  this.galleryStyle = 'list'
    imageService.addImage({
      title: 'one', 
      desc: 'this is a demo',
      imgUrl: require('../../asset/img/flower/flower-0.jpg')
    })
  console.log(imageService)
  this.images = imageService.images
  //this.images = [
    //{
      //title: 'one',
      //desc: 'this is a ssdflkjdsflk djskj dsflkjds flkj', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-4.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-2.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-6.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-2.jpg'),
    //},
    //{
      //title: 'three',
      //desc: 'eye in the storm', 
      //imgUrl: require('../../asset/img/flower/flower-8.jpg'),
    //},
    //{
      //title: 'four',
      //desc: 'guf du pug', 
      //imgUrl: require('../../asset/img/flower/flower-3.jpg'),
    //},
    //{
      //title: 'five',
      //desc: 'lul slug aint that slimy doe', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'one',
      //desc: 'this is a ssdflkjdsflk djskj dsflkjds flkj', 
      //imgUrl: require('../../asset/img/flower/flower-2.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-9.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-7.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'three',
      //desc: 'eye in the storm', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'four',
      //desc: 'guf du pug', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'five',
      //desc: 'lul slug aint that slimy doe', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'one',
      //desc: 'this is a ssdflkjdsflk djskj dsflkjds flkj', 
      //imgUrl: require('../../asset/img/flower/flower-3.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'three',
      //desc: 'eye in the storm', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'four',
      //desc: 'guf du pug', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'five',
      //desc: 'lul slug aint that slimy doe', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'one',
      //desc: 'this is a ssdflkjdsflk djskj dsflkjds flkj', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-3.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'two',
      //desc: 'slug s is mon x', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'three',
      //desc: 'eye in the storm', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'four',
      //desc: 'guf du pug', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
    //{
      //title: 'five',
      //desc: 'lul slug aint that slimy doe', 
      //imgUrl: require('../../asset/img/flower/flower-0.jpg'),
    //},
  //]

  this.selectGalleryStyle = function(style){
    if (style === 'list' || style === 'thumb' || style === 'image')
      this.galleryStyle = style
    return this.galleryStyle
  }
}
