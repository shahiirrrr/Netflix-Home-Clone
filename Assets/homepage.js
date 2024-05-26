// Select all elements with the class "FAQ__title" and store them in the variable "accordion"
let accordion = document.getElementsByClassName("FAQ__title");

// Loop through each element in the "accordion" array
for (let i = 0; i < accordion.length; i++) {
  // Add a click event listener to each accordion element
  accordion[i].addEventListener("click", function () {
    // Toggle the class of the second child node of the clicked element between "fa-plus" and "fa-times"
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    // Select the next sibling element of the clicked element (the content) and store it in the variable "content"
    let content = this.nextElementSibling;

    // Check if the content element has a maxHeight style applied
    if (content.style.maxHeight) {
      // If it has a maxHeight style applied, remove it (collapse the content)
      content.style.maxHeight = null;
    } else {
      // If it doesn't have a maxHeight style applied, set it to the scrollHeight of the content (expand the content)
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
