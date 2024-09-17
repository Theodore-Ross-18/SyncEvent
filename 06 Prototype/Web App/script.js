document.getElementById("contactBtn").addEventListener("click", function() {
    let contactForm = document.getElementById("contactForm");
    if (contactForm.classList.contains("hidden")) {
        contactForm.classList.remove("hidden");
        contactForm.style.animation = "fadeIn 1s forwards";
    } else {
        contactForm.classList.add("hidden");
    }
});

const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const itemCount = items.length;
let currentIndex = 0;

// Scroll Right
document.getElementById("scrollRight").addEventListener("click", function() {
    if (currentIndex >= itemCount - 1) {
        currentIndex = 0; // Reset to first item for infinite scrolling
    } else {
        currentIndex++;
    }
    updateCarousel();
});

// Scroll Left
document.getElementById("scrollLeft").addEventListener("click", function() {
    if (currentIndex <= 0) {
        currentIndex = itemCount - 1; // Go to last item for infinite scrolling
    } else {
        currentIndex--;
    }
    updateCarousel();
});

// Update Carousel
function updateCarousel() {
    const newTransformValue = `translateX(-${currentIndex * 100}%)`;
    carousel.style.transform = newTransformValue;
}
