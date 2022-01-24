var slideIndex = 0;


function showSlides() {
  var i; // variable that will be used to increment the carousel index
  var slides = document.getElementsByClassName("carousele-item"); // get my images thanks to their class
  var dots = document.getElementsByClassName("dot"); // get the dots thanks to their class
  var background = document.getElementsByTagName('body');
//init of for loop in order to increment index while i is less than the number of images my carousel contains
  for (i = 0; i < slides.length; i++) { 
// at start my slides images are not displayed
    slides[i].style.display = "none";  
  } // end of the loop
  slideIndex++; // incrementation of my slideIndex (to aim first, second and third image...)
  // init a condition that say "if the slide index is less that the max length (here, it's 3)...
  if (slideIndex > slides.length) {slideIndex = 1} //make the slide index start at 1   
  for (i = 0; i < dots.length; i++) {
// another loop that works the same way than the previous one but the dots
    dots[i].className = dots[i].className.replace(" active", ""); // this time, I change their class from active to none
  }
  slides[slideIndex-1].style.display = "block"; // change the style of my slides so they are displayed in block
  dots[slideIndex-1].className += " active"; // set the dots class to "active". This way, the dots backround color also changes when the slide is changed
  if (slideIndex=1) {
    background.style.backgroundColor = "#F3fd44";
  }else if (slideIndex = 2) {
    background.style.backgroundColor = "#045d9a";
  }
  setTimeout(showSlides, 2000); // Change image every 15 seconds
}



showSlides();


