// Navigation

let burger_menu = document.querySelector("a.navbar-burger");
let projects_dropdown = document.querySelector("div.navbar-item.has-dropdown");

function toggleMenu() {
    document.querySelector(".burger").classList.toggle("is-active");
    document.querySelector(".navbar-menu").classList.toggle("is-active");
};

function toggleNavbarDropdown() {
    document.querySelector(".navbar-item.has-dropdown").classList.toggle("is-active");
};

burger_menu.addEventListener("click", toggleMenu, false);
projects_dropdown.addEventListener("click", toggleNavbarDropdown, false);

// Animations



function animateCard(element) {
    $(element).hover(function () {
        element.style.transitionDuration = '100ms';
        anime({
            targets: element,
            scale: 1.05
        });
    }, function () {
        anime({
            targets: element,
            scale: 1
        });
    });

    let cardsWaypoint = new Waypoint({
        element: element,
        handler: function (direction) {
            element.style.opacity = 1;
            anime({
                targets: element,
                translateY: 0,
                easing: 'easeOutBounce',
                delay: anime.stagger(300, { easing: 'easeOutQuad' })
            });
        },
        offset: '90%'
    });
};

for (element of document.querySelectorAll('.tile .is-child')) {

    element.style.opacity = 0;
    element.style.transitionDuration = '1000ms';
    anime({
        targets: element,
        translateY: 50
    });

    animateCard(element);
};

let footerWaypoint = new Waypoint({
    element: 'footer',
    handler: function (direction) {
        element.style.opacity = 1;
        anime({
            targets: element,
            translateY: 0,
            easing: 'easeOutBounce',
            delay: anime.stagger(300, { easing: 'easeOutQuad' })
        });
    },
    offset: '60%'
});


for (element of document.querySelectorAll("section.services h1, section.services h2")) {
    element.style.opacity = 0;
    anime({
        targets: element,
        translateX: -50
    });
};

let servicesWaypoint = new Waypoint({
    element: '.services',
    handler: function (direction) {
        for (element of document.querySelectorAll("section.services h1, section.services h2")) {
            element.style.transitionDuration = '200ms';
            element.style.opacity = 1;
            anime({
                targets: element,
                translateX: -50
            });
        };
        anime({
            targets: "section.services h1, section.services h2",
            translateX: 0,
            easing: 'easeOutQuad',
            delay: anime.stagger(100)
        });
    },
    offset: '70%'
});


document.querySelector("section.main-title img").style.opacity = 0;
document.querySelector("section.main-title img").style.transform = "translateY(50px)";

anime({
    targets: "section.main-title img",
    translateY: 0,
    opacity: 1,
    scale: 1,
    duration: 1000,
    easing: 'easeOutQuad'
});

document.querySelector("section.main-title h2").style.opacity = 0;
document.querySelector("section.main-title h2").style.transform = "translateY(50px)";

anime({
    targets: "section.main-title h2",
    translateY: 0,
    opacity: 1,
    scale: 1,
    duration: 1500,
    easing: 'easeOutQuad'
});

var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
} 

