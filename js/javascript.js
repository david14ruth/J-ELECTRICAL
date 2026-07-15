console.log("JavaScript connected!");
const slides = document.querySelectorAll(".slide");
let current = 0;
//const slides_2 = document.querySelectorAll(".slide-2");
//let current_2 = 0;

function showSlide() {
    // Hide current image
    slides[current].classList.remove("active");

    // Move to next image
    current++;

    // Start over when reaching the end
    if (current >= slides.length) {
        current = 0;
    }

    // Show next image
    slides[current].classList.add("active");
}
setInterval(showSlide, 3000);
/*function showSlide_2() {
    // Hide current image
    slides_2[current_2].classList.remove("active");

    // Move to next image
    current_2++;

    // Start over when reaching the end
    if (current_2 >= slides_2.length) {
        current_2 = 0;
    }

    // Show next image
    slides_2[current_2].classList.add("active");
}
// Change image every 5 seconds

setInterval(showSlide_2, 3000);*/