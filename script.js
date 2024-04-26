let slideIndex = 0;
    const slides = document.querySelectorAll('.gallery-item');

    // Εμφάνιση αρχικού slide όταν φορτώνει η σελίδα
    showSlide(slideIndex);

    function showSlide(n) {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        if (n < 0) {
            slideIndex = slides.length - 1;
        } else if (n >= slides.length) {
            slideIndex = 0;
        }

        slides[slideIndex].style.display = 'block';
    }

    function nextSlide() {
        slideIndex++;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex--;
        showSlide(slideIndex);
    }

    // Λειτουργία των πλήκτρων ελέγχου του slideshow
    const prevButton = document.createElement('button');
    prevButton.textContent = '❮';
    prevButton.addEventListener('click', prevSlide);

    const nextButton = document.createElement('button');
    nextButton.textContent = '❯';
    nextButton.addEventListener('click', nextSlide);

    document.querySelector('.gallery').appendChild(prevButton);
    document.querySelector('.gallery').appendChild(nextButton);

    // Αυτόματη εναλλαγή των εικόνων κάθε 5 δευτερόλεπτα
    setInterval(nextSlide, 5000);