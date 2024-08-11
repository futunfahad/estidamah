let slideIndex = Array(21).fill(1); // Initialize an array with 21 entries (index 0-20), all set to 1
let slideId = [
  "mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", 
  "mySlides6", "mySlides7", "mySlides8", "mySlides9", "mySlides10", 
  "mySlides11", "mySlides12", "mySlides13", "mySlides14", "mySlides15", 
  "mySlides16", "mySlides17", "mySlides18", "mySlides19", "mySlides20"
]; // Add class names for all 20 slide groups

// Show the initial slides for all slide groups
for (let i = 0; i < slideId.length; i++) {
  showSlides(1, i);
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
