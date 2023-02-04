// Navigation

let burger_menu = document.querySelector("a.navbar-burger");

function toggleMenu() {
    document.querySelector(".burger").classList.toggle("is-active");
    document.querySelector(".navbar-menu").classList.toggle("is-active");
}

burger_menu.addEventListener("click", toggleMenu, false);

toggleMenu();      // Needed as it initializes expanded to support no-js

// Hastag support

let text_elements = document.querySelectorAll("p");

for (let i = 0; i < text_elements.length; i++) {
    let hashtags = text_elements[i].innerHTML.match(/(#\w*)\b/g);

    if (hashtags === null) {
        continue;
    }
    else {
        for (let j = 0; j < hashtags.length; j++) {
            text_elements[i].innerHTML =
                text_elements[i].innerHTML.slice(
                    0, text_elements[i].innerHTML.indexOf(
                        hashtags[j]
                    )
                )
                + "<a class='hashtag' href='https://nodoambiental.org/pages/blog/tags" +
                hashtags[j] + "'>" + hashtags[j]
                + "</a>" +
                text_elements[i].innerHTML.slice(
                    text_elements[i].innerHTML.indexOf(
                        hashtags[j]
                    ) + hashtags[j].length, text_elements[i].innerHTML.length
                )
        }
    }
}

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
        offset: '100%'
    });
}

for (element of document.querySelectorAll('.tile .is-child')) {
    if (String(element.classList).search("non-selectable") == -1) {
        element.style.opacity = 0;
        element.style.transitionDuration = '1000ms';
        anime({
            targets: element,
            translateY: 50
        });

        animateCard(element);
    }

}

// Animations: Waypoints

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
        }
        anime({
            targets: "section.services h1, section.services h2",
            translateX: 0,
            easing: 'easeOutQuad',
            delay: anime.stagger(100)
        });
    },
    offset: '70%'
});


for (element of document.querySelectorAll("section.services h1, section.services h2")) {
    element.style.opacity = 0;
    anime({
        targets: element,
        translateX: -50
    });
}

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

// Accordion

let accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
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

// Random colors on cards

function getRandomColorPair() {
    while (true) {
        var firstColor = [
            parseInt(Math.random() * 255),
            parseInt(Math.random() * 255),
            parseInt(Math.random() * 255)];

        if (
            firstColor[0] > 130 && Math.abs(firstColor[0] - firstColor[2]) > 20 &&
            firstColor[1] > 150 && Math.abs(firstColor[1] - firstColor[0]) > 40 &&
            firstColor[2] > 160 && Math.abs(firstColor[2] - firstColor[1]) > 30) { break }
    }
    while (true) {
        var secondColor = [
            (firstColor[0] + parseInt(Math.random() * 55)),
            (firstColor[1] - parseInt(Math.random() * 35)),
            (firstColor[2] + parseInt(Math.random() * 65))];
        if (secondColor[0] < 256 && secondColor[1] < 256 && secondColor[2] < 256) { break }
    }

    return [firstColor, secondColor];
}

let team = document.querySelectorAll("section.team .tile.is-vertical > div.tile");

for (let i = 1; i <= team.length; i++) {
    let colors = getRandomColorPair();
    let tile = document.querySelector(".team-" + String(i));
    tile.style.backgroundImage =
        "linear-gradient(0deg, rgb(" +
        colors[0][0] + ", " +
        colors[0][1] + ", " +
        colors[0][2] + "), rgb(" +
        colors[1][0] + ", " +
        colors[1][1] + ", " +
        colors[1][2] + "))";
}

let services = document.querySelectorAll("section.services .tile.is-vertical > article");

for (let i = 1; i <= services.length; i++) {
    let colors = getRandomColorPair();
    let tile = document.querySelectorAll(".services-" + String(i));
    for (let j = 0; j < tile.length; j++) { //Services is used as a general tile (i should change that) for other areas of the website. This iterator is there to ensure that in repeating sections, like categories, every tile is grabbed and colored.
        tile[j].style.backgroundImage =
            "linear-gradient(90deg, rgb(" +
            colors[0][0] + ", " +
            colors[0][1] + ", " +
            colors[0][2] + "), rgb(" +
            colors[1][0] + ", " +
            colors[1][1] + ", " +
            colors[1][2] + "))";
    }
}

let projects = document.querySelectorAll("section.projects .tile.is-vertical > article");

for (let i = 1; i <= projects.length; i++) {
    let colors = getRandomColorPair();
    let tile = document.querySelector(".projects-" + String(i));
    tile.style.backgroundImage =
        "linear-gradient(45deg, rgb(" +
        colors[0][0] + ", " +
        colors[0][1] + ", " +
        colors[0][2] + "), rgb(" +
        colors[1][0] + ", " +
        colors[1][1] + ", " +
        colors[1][2] + "))";
}

