/* ==========================================
   RADAR INVERSIÓN V3
   SCRIPT PRINCIPAL
========================================== */

/* ==========================================
   NAVBAR AL HACER SCROLL
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});

/* ==========================================
   SCROLL SUAVE
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});

/* ==========================================
   MENÚ ACTIVO
========================================== */

const sections = document.querySelectorAll("section[id]");
const menuLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    menuLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});/* ==========================================
   ANIMACIONES AL HACER SCROLL
========================================== */

const animatedElements = document.querySelectorAll(
    ".feature-card, .step, .property-card, .stat, .metric"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});

/* ==========================================
   CONTADOR DE MÉTRICAS
========================================== */

const counters = document.querySelectorAll(".metric h3");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const text = counter.textContent.trim();

        const number = parseFloat(text.replace(",", "."));

        if (isNaN(number)) return;

        let current = 0;
        const increment = number / 40;

        const timer = setInterval(() => {

            current += increment;

            if (current >= number) {

                counter.textContent = text;

                clearInterval(timer);

            } else {

                if (text.includes("%")) {

                    counter.textContent = current.toFixed(1).replace(".", ",") + "%";

                } else {

                    counter.textContent = Math.floor(current);

                }

            }

        }, 25);

        counterObserver.unobserve(counter);

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});
