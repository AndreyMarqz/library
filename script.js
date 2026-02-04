const addBookForm = document.querySelector("dialog");
const addBookButton = document.querySelector(".add-book-btn");
const addBook = document.querySelector(".add-book-submit")
const closeFormButton = document.querySelector(".close-btn");

addBookButton.addEventListener("click", () => {
    addBookForm.showModal();
})

closeFormButton.addEventListener("click", () => {
    addBookForm.close();
})


