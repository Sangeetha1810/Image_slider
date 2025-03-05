document.addEventListener("DOMContentLoaded", () => { 
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });

    // Initial display
    showSlide(currentIndex);
});
