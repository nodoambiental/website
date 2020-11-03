// Expandable cards on service subpages

document.querySelectorAll("section > .expandable_card")
    .forEach((element, index) => {
        element.addEventListener("click", () => {
            element.id = `expandable_card_${index}`
            const button = document.querySelector(`#${element.id} .expandable_card_button`)
            const content = document.querySelector(`#${element.id} .content`)
            
            if (content.classList.contains("expanded")) {
                content.classList.remove("expanded");
                content.classList.add("contracted");
                if (button) {
                    button.classList.remove("fa-caret-square-down");
                    button.classList.add("fa-caret-square-right");
                }
            }
            else if (content.classList.contains("contracted")) {
                content.classList.remove("contracted");
                content.classList.add("expanded");
                if (button) {
                    button.classList.remove("fa-caret-square-right");
                    button.classList.add("fa-caret-square-down");
                }
            }
        },
            false
    );
})