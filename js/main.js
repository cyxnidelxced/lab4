//get the whole ball rolling when the page completes loading.
document.addEventListener('DOMContentLoaded', init);

// this function prepares the page for user interaction
function init() {
  //create shortcut vars
  const back_btn = document.querySelector(".back-btn");
  const next_btn = document.querySelector(".next-btn");
  const frame = document.querySelector(".frame");
  const slides = frame.querySelectorAll("img");

  //with JS active, hide all images
  slides.forEach((slide) => {
    slide.classList.add("hide");
  });
  
  // now, show the first slide
  slides[0].classList.remove("hide");
  
   next_btn.addEventListener("click",changeSlide);
   back_btn.addEventListener("click", changeSlide);
  
// TODO: Remove the controls from the HTML
// and add in the next/back controls via JS
  
}




function changeSlide(e) {
  
    // stop link from trying to reload page
    e.preventDefault();
    
    //shortcut vars
    const frame = document.querySelector(".frame");
    const slides = frame.querySelectorAll("img");
    let showing = document.querySelector(".current");
    let nextUp = "";
  
    // check which control was clicked and set nextUp apporpriately
    if(e.target.className == 'next-btn') {
      nextUp = showing.nextElementSibling;
    }
  
    if(e.target.className == 'back-btn') {
      nextUp = showing.previousElementSibling;
    }
    
    // deactivate current image
    showing.classList.toggle("hide");
    showing.classList.toggle("current");
    
    //make sure next image is there
    if (!nextUp) {
      nextUp = slides[slides.length - 1];
    }
  
   //make sure nexUp is an image tag and NOT the figcaption
    if (nextUp.nodeName !== "IMG") {
      nextUp = slides[0];
    }
  
    // activate next image
    nextUp.classList.remove("hide");
    nextUp.classList.add("current");
  }


// remaining steps: 
// 1. dynamically update the figcation text for each image.
// 2. add an autoplay feature that cancels when user interacts with controls.
// 3. add at least 10 images.

//BONUS: 
// 1. Add at least two more figure tags in the html with several images each.
// 2. add a set of controls to switch the visibility of different albums.
// 3. always show the first image in an album when swapping albums.
// 4. make sure the captions continue to show the right text for each image.