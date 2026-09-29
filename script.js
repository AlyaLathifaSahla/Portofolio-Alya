/* =========================
   MOBILE NAVBAR
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   DARK MODE
========================= */

const themeToggle =
    document.getElementById("theme-toggle");

const themeIcon =
    themeToggle.querySelector("i");


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});


/* Load saved theme */

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   PROJECT FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        projectCards.forEach(card => {

            const category =
                card.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "block";

                setTimeout(() => {

                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";

                }, 50);

            } else {

                card.style.opacity = "0";
                card.style.transform = "translateY(20px)";

                setTimeout(() => {

                    card.style.display = "none";

                }, 300);

            }

        });

    });

});


/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.getElementById("back-to-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* =========================
   EXPERIENCE SLIDER
========================= */

document.querySelectorAll(".slider").forEach(slider => {

    const track = slider.querySelector(".slides");
    const slides = slider.querySelectorAll(".slide");
    const dotsBox = slider.querySelector(".slide-dots");

    slides.forEach(() => dotsBox.appendChild(document.createElement("i")));
    const dots = dotsBox.querySelectorAll("i");

    const update = () => {
        const i = Math.round(track.scrollLeft / track.clientWidth);
        dots.forEach((d, n) => d.classList.toggle("on", n === i));
    };

    track.addEventListener("scroll", update);
    update();

    slider.querySelector(".prev").addEventListener("click", () =>
        track.scrollBy({ left: -track.clientWidth, behavior: "smooth" }));

    slider.querySelector(".next").addEventListener("click", () =>
        track.scrollBy({ left: track.clientWidth, behavior: "smooth" }));

});
