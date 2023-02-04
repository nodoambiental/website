// Expandable cards on service subpages

let expandable_cards = document.querySelectorAll("a.expandable_card");
let expandable_content = document.querySelectorAll("a.expandable_card .content");

function toggleCard(index) {
    if (expandable_content[index].classList.contains("expanded")) {
        expandable_content[index].classList.remove("expanded");
        expandable_content[index].classList.add("contracted");
    }
    else if (expandable_content[index].classList.contains("contracted")) {
        expandable_content[index].classList.remove("contracted");
        expandable_content[index].classList.add("expanded");
    }
}

for (let i = 0; i < expandable_cards.length; i++) {
    expandable_cards[i].addEventListener("click", function () {
        toggleCard(i);
    }, false);
} 
