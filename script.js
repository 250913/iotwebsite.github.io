let currentSlide = 1;
const totalSlides = document.querySelectorAll('.slide').length;

document.getElementById('prevBtn').addEventListener('click', function() {
    changeSlide(-1);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    changeSlide(1);
});

document.querySelectorAll('#contentBar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function changeSlide(move) {
    const newSlide = currentSlide + move;
    if (newSlide > 0 && newSlide <= totalSlides) {
        document.getElementById('slide' + currentSlide).style.display = 'none';
        currentSlide = newSlide;
        document.getElementById('slide' + currentSlide).style.display = 'block';
    }
}
