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

new Pic ('breakfast', 'img/breakfast.jpg');
new Pic ('dragon', 'img/dragon.jpg');
new Pic ('sweep', 'img/sweep.png');
new Pic ('wine-glass', 'img/wine-glass.jpg');
new Pic ('bag', 'img/bag.jpg');
new Pic ('bubblegum', 'img/bubblegum.jpg');
new Pic ('pen', 'img/pen.jpg');
new Pic ('tauntaun', 'img/tauntaun.jpg');
new Pic ('banana', 'img/banana.jpg');
new Pic ('chair', 'img/chair.jpg');
new Pic ('pet-sweep', 'img/pet-sweep.jpg');
new Pic ('unicorn', 'img/unicorn.jpg');
new Pic ('bathroom', 'img/bathroom.jpg');
new Pic ('cthulhu', 'img/cthulhu.jpg');
new Pic ('scissors', 'img/scissors.jpg');
new Pic ('usb', 'img/usb.gif');
new Pic ('boots', 'img/boots.jpg');
new Pic ('dog-duck', 'img/dog-duck.jpg');
new Pic ('shark', 'img/shark.jpg');
new Pic ('water-can', 'img/water-can.jpg');

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

