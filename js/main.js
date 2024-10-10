let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicatorsContainer = document.querySelector('.indicators');
const totalSlides = slides.length;
let autoplayInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });

    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function createIndicators() {
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
}

// Autoplay feature
function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 3000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Event listeners to pause on hover
document.querySelector('.carousel').addEventListener('mouseenter', stopAutoplay);
document.querySelector('.carousel').addEventListener('mouseleave', startAutoplay);

// Initialize carousel
let images = document.querySelectorAll('.carousel-item');
images.forEach((img) => {
    img.style.display="none";
});
let left = document.querySelectorAll('.back');
left.forEach((btn) => {
    btn.style.left = "10px";
});
let right = document.querySelectorAll('.next');
right.forEach((btn) => {
    btn.style.right = "10px";
});
showSlide(currentSlide);
createIndicators();
startAutoplay();