  /* Calcular o header  */
  
  document.addEventListener("DOMContentLoaded", function () {
    function adjustPadding() {
        const header = document.querySelector("header");
        if (header) {
            document.documentElement.style.setProperty("--header-height", header.offsetHeight + "px");
        }
    }

    adjustPadding();
    window.addEventListener("resize", adjustPadding);
});

  /* EFEITOS  */

  
  /* Efeito capa  */
document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector("#home");

    function showHero() {
        heroSection.classList.add("hero-visible");
    }

    setTimeout(showHero, 300); // Atraso para suavizar a entrada
});

 /* Efeito benefícios  */

 document.addEventListener("DOMContentLoaded", function () {
    const benefits = document.querySelectorAll(".benefit");

    function showBenefits() {
        benefits.forEach((benefit, index) => {
            if (benefit.getBoundingClientRect().top < window.innerHeight * 0.85) {
                setTimeout(() => {
                    benefit.classList.add("benefit-visible");
                }, index * 200); // Efeito em cascata
            }
        });
    }

    window.addEventListener("scroll", showBenefits);
    showBenefits(); // Caso já esteja visível ao carregar
});

/* Efeito serviços */
document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll(".service-item");

    function showServices() {
        services.forEach((service, index) => {
            if (service.getBoundingClientRect().top < window.innerHeight * 0.85) {
                setTimeout(() => {
                    service.classList.add("service-item-visible");
                }, index * 200); // Efeito em cascata
            }
        });
    }

    window.addEventListener("scroll", showServices);
    showServices(); // Caso já esteja visível ao carregar
});

/* Efeito cursos */

document.addEventListener("DOMContentLoaded", function () {
    const courseSection = document.getElementById("courses");
    const benefits = document.querySelectorAll(".course-benefits-list li");

    function showCourses() {
        if (courseSection.getBoundingClientRect().top < window.innerHeight * 0.8) {
            courseSection.classList.add("visible");

            benefits.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add("visible");
                }, index * 300); // Efeito em cascata para cada item
            });
        }
    }

    window.addEventListener("scroll", showCourses);
    showCourses(); // Caso já esteja visível ao carregar
});

/* Efeito para localização */

document.addEventListener("DOMContentLoaded", function () {
    const locationSection = document.getElementById("location");

    function showLocation() {
        if (locationSection.getBoundingClientRect().top < window.innerHeight * 0.8) {
            locationSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", showLocation);
    showLocation(); // Caso já esteja visível ao carregar
});


/* Efeito para as redes sociais*/

document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.getElementById("contact");

    function showContact() {
        if (contactSection.getBoundingClientRect().top < window.innerHeight * 0.8) {
            contactSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", showContact);
    showContact(); // Caso já esteja visível ao carregar
});


/* Efeito navegação */

document.addEventListener("DOMContentLoaded", function () {
    /* Navegação suave */
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    /* Efeito de Fade-in e Slide-up ao rolar */
    const fadeElements = document.querySelectorAll(".fade-in");

    function handleScroll() {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    /* Efeito de Parallax aprimorado */
    const parallaxImage = document.querySelector(".parallax");
    if (parallaxImage) {
        window.addEventListener("scroll", function () {
            let scrollPosition = window.scrollY;
            parallaxImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        });
    }

    /* Destaque na navegação ao rolar */
    const sections = document.querySelectorAll("section");
    function highlightNav() {
        let scrollPosition = window.scrollY;
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const id = section.getAttribute("id");
            const link = document.querySelector(`nav a[href="#${id}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }
    window.addEventListener("scroll", highlightNav);

    /* Carrossel de Produtos - Efeito Suavizado */
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");

    let index = 0;
    const totalItems = items.length;
    const intervalTime = 4000; // Tempo maior para experiência mais agradável

    function updateCarousel() {
        carousel.style.transition = "transform 0.8s ease-in-out";
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        index = (index + 1) % totalItems;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    let autoSlide = setInterval(nextSlide, intervalTime);

    nextButton.addEventListener("click", function () {
        nextSlide();
        resetAutoSlide();
    });

    prevButton.addEventListener("click", function () {
        prevSlide();
        resetAutoSlide();
    });

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, intervalTime);
    }

    /* Efeito de Hover nos botões */
    const buttons = document.querySelectorAll(".btn, .cta, .cta-button");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
            button.style.transition = "transform 0.3s ease";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });
});

  /* BOTÃO HAMBURGUER */
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
