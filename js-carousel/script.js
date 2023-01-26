//dom
const carouselImages = document.getElementsByClassName('carousel-image');
const numImages = carouselImages.length;
const indicator = document.getElementsByClassName('carousel-indicator');

//click listeners
document.getElementById('prev').addEventListener('click', function(){
  prevImage();
});

document.getElementById('next').addEventListener('click', function(){
  nextImage();
});

let imageIndex = 0;

//adds or removes class to show the image and indicator
function updatePosition(){
  for(let image of carouselImages){
    image.classList.remove('carousel-visible');
    image.classList.add('carousel-hidden');
  }
  for(let indicates of indicator){
    indicates.classList.remove('current');
  }
  indicator[imageIndex].classList.add('current');
  carouselImages[imageIndex].classList.remove('carousel-hidden');
  carouselImages[imageIndex].classList.add('carousel-visible');
}

const indicators = document.querySelectorAll('.carousel-indicator');
indicators.forEach(button => {
  button.addEventListener('click', e =>{
    if(e.target.id === 'btn1'){
      imageIndex = 0;
    }
    else if(e.target.id === 'btn2'){
      imageIndex = 1;
    }
    else{
      imageIndex = 2;
    }
    updatePosition();
  });
});

function nextImage(){
  if(imageIndex == numImages-1){
    imageIndex = 0;
  }else{
    imageIndex++;
  }
  updatePosition();
}

//interval to automate slide
setInterval(nextImage, 4000);

function prevImage(){
  if(imageIndex == 0){
    imageIndex = numImages-1;
  }else{
    imageIndex--;
  }
  updatePosition();
}
