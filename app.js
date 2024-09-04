// toggle navigator

function toggleNav() {
    
    const navLinks = document.getElementById("navLinks");
  
    
    navLinks.classList.toggle("active");
  }
  

  //keeps track of the current state of the images

let images = [
    "./asset/img1.jpg",
    "./asset/img2.jpg",
    "./asset/img3.jpg",
    "./asset/img4.jpg",
    "./asset/img5.jpg"
];


// this is the first index 
let currentIndex = 0;


// the function move from the current index to the  new index
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("slider-image").src = images[currentIndex];
}

// the function moveFrom next indext to previous indext

function prevSlide(){
    currentIndex = (currentIndex +1 + images.length) % images.length
    document.getElementById("slider-image").src = images[currentIndex ];
}