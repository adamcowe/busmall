'use strict';

//  need an array ti hold all Pic images from image dir (img)

Pic.allPics = [];

//  crete objects for the Pics

function Pic(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  //hint this.toatalclicks = 0;
  //hint justshown = false;
  //this needs to now if true, need to code that
  Pic.allPics.push(this);
}

new Pic ('breakfast.jpg', 'img/breakfast.jpg');
new Pic ('dragon.jpg', 'img/dragon.jpg');
new Pic ('sweep.png', 'img/sweep.png');
new Pic ('wine-glass.jpg', 'img/wine-glass.jpg');
new Pic ('bag.jpg', 'img/bag.jpg');
new Pic ('bubblegum.jpg', 'img/bubblegum.jpg');
new Pic ('pen.jpg', 'img/pen.jpg');
new Pic ('tauntaun.jpg', 'img/tauntaun.jpg');
new Pic ('banana.jpg', 'img/banana.jpg');
new Pic ('chair.jpg', 'img/chair.jpg');
new Pic ('pet-sweep.jpg', 'img/pet-sweep.jpg');
new Pic ('unicorn.jpg', 'img/unicorn.jpg');
new Pic ('bathroom.jpg', 'img/bathroom.jpg');
new Pic ('cthulhu.jpg', 'img/cthulhu.jpg');
new Pic ('scissors.jpg', 'img/scissors.jpg');
new Pic ('usb.gif', 'img/usb.gif');
new Pic ('boots.jpg', 'img/boots.jpg');
new Pic ('dog-duck.jpg', 'img/dog-duck.jpg');
new Pic ('shark.jpg', 'img/shark.jpg');
new Pic ('water-can.jpg', 'img/water-can.jpg');

//  need event listener to track clicks of the Pic images

var imageContainer = document.getElementById('pic');

//need to stop the randomPic loop from allowing last pic
//create an array with all pics and add to the list? need true for new loop

imageContainer.addEventListener('click', randomPic);


//  need to be able to randomly display images

function randomPic() {
  var randomIndex = Math.floor(Math.random() * Pic.allPics.length);

  imageContainer.src = Pic.allPics[randomIndex].filepath;
}

randomPic();

//try to stop the same pic twice

var picArray = [];

