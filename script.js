// ==========================
// Typing Animation
// ==========================

const roles = [
    "DevOps Engineer",
    "Azure Cloud Engineer",
    "Terraform Expert",
    "Kubernetes Administrator",
    "Docker Enthusiast",
    "CI/CD Automation Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleElement = document.querySelector(".hero-text h2");

function typeEffect() {

    if (!roleElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        roleElement.textContent = currentRole.substring(0, charIndex++);
    } else {

        roleElement.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length + 1) {

        deleting = true;
        speed = 1500;

    } else if (deleting && charIndex === 0) {

        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ==========================
// Navbar Active Link
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");
        }

    });

});


// ==========================
// Scroll Reveal
// ==========================

const revealItems = document.querySelectorAll(".card,.project,.about,.hero");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = "all .8s ease";

        }

    });

}, {
    threshold: .15
});

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";

    observer.observe(item);

});


// ==========================
// Back To Top Button
// ==========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00d9ff;
color:#000;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 0 20px cyan;
z-index:999;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";
    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};


// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ==========================
// Skill Card Hover Animation
// ==========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "scale(1)";
    });

});


// ==========================
// Project Card Animation
// ==========================

const projects = document.querySelectorAll(".project");

projects.forEach(project => {

    project.addEventListener("mouseenter", () => {

        project.style.boxShadow = "0 0 35px cyan";

    });

    project.addEventListener("mouseleave", () => {

        project.style.boxShadow = "none";

    });

});


// ==========================
// Console Welcome
// ==========================

console.log("%cWelcome to Dinesh Chauhan Portfolio 🚀",
"color:#00d9ff;font-size:18px;font-weight:bold;");