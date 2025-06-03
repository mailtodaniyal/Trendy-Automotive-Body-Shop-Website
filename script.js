        document.addEventListener('DOMContentLoaded', function() {
            const header = document.getElementById('header');
            const menuBtn = document.getElementById('menuBtn');
            const navLinks = document.querySelector('.nav-links');
            const faqItems = document.querySelectorAll('.faq-item');
            const testimonialSlides = document.querySelectorAll('.testimonial');
            const sliderDots = document.querySelectorAll('.slider-dot');
            const filterBtns = document.querySelectorAll('.filter-btn');
            const vehicleCards = document.querySelectorAll('.vehicle-card');
            let currentSlide = 0;

            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            menuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                menuBtn.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });

            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });

            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    item.classList.toggle('active');
                });
            });

            function showSlide(index) {
                testimonialSlides.forEach(slide => slide.classList.remove('active'));
                sliderDots.forEach(dot => dot.classList.remove('active'));
                testimonialSlides[index].classList.add('active');
                sliderDots[index].classList.add('active');
                currentSlide = index;
            }

            sliderDots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const slideIndex = parseInt(this.getAttribute('data-slide'));
                    showSlide(slideIndex);
                });
            });

            setInterval(() => {
                currentSlide = (currentSlide + 1) % testimonialSlides.length;
                showSlide(currentSlide);
            }, 5000);

            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    const filter = this.getAttribute('data-filter');

                    vehicleCards.forEach(card => {
                        if (filter === 'all' || card.getAttribute('data-category') === filter) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });

            const scrollLinks = document.querySelectorAll('a[href^="#"]');
            scrollLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
