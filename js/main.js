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

function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 3000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Event listeners to pause on hover
document.querySelector('.carousel').addEventListener('mouseenter', stopAutoplay);
document.querySelector('.carousel').addEventListener('mouseleave', startAutoplay);

// Initialize the carousel
createIndicators();
showSlide(currentSlide);
startAutoplay();


//canvas
let c = init('canvas');
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;
//initiation

class firefly {
    constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.s = Math.random() * 2;
        this.ang = Math.random() * 2 * Math.PI;
        this.v = (this.s * this.s) / 4;
    }

    move() {
        this.x += this.v * Math.cos(this.ang);
        this.y += this.v * Math.sin(this.ang);
        this.and += (Math.random() * 20 * Math.PI) / 180 - (10 * Math.PI);
    }

    show() {
        c.beginPath();
        c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
        c.fillStyle = "#fddba3";
        c.fill();
    }
}
let f = [];

function draw() {
    if (f.length < 100) {
        for (let j = 0; j < 10; j++) {
            f.push(new firefly());
        }
    }

    //animation
    for (let i = 0; i< f.length; i++) {
        f[i].move();
        f[i].show();
        if (f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h) {
            f.splice(i, 1);
        }
    }
}

let mouse = {};
let last_mouse = {};

canvas.addEventListener("mouseover", function (e) {
    last_mouse.x = mouse.x;
    last_mouse.y = mouse.y;

    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
},
false
);

function init(elemid) {
    let canvas = document.getElementById(elemid),
        c = canvas.getContext("2d"),
        w = (canvas.width = window.innerWidth),
        h = (canvas.height = window.innerHeight);
    c.fillStyle = "rgba(30, 30, 30, 1)";
    c.fillRect(0, 0, w, h);
    return c;
}

window.requestAnimationFrame = function () {
    return (
        window.requestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback);
        }
    );
};

function loop() {
    window.requestAnimationFrame(loop);
    c.clearRect(0, 0, w, h);
    draw();
}

window.addEventListener('resize', function() {
    (w = canvas.width = window.innerWidth),
        (h = canvas.height = window.innerHeight);
        loop();
});
loop();
setInterval(loop, 1000 / 60);