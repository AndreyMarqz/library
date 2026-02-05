const addBookForm = document.querySelector("dialog");
const addBookButton = document.querySelector(".add-book-btn");
const addBookSubmitButton = document.querySelector(".add-book-submit");
const closeFormButton = document.querySelector(".close-btn");

addBookButton.addEventListener("click", () => {
    addBookForm.showModal();
})

closeFormButton.addEventListener("click", () => {
    addBookForm.close();
})

let myLibrary = [];

function Book(author, name, pages){
    this.author = author;
    this.name = name;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(author, name, pages){
    const newBook = new Book(author, name, pages);
    myLibrary.push(newBook);

    render();
}

addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const authorNameField = document.querySelector(".author-name").value;
    const bookTitleField = document.querySelector(".book-title").value;
    const bookPagesField = document.querySelector(".book-pages").value;

    addBookToLibrary(authorNameField, bookTitleField, bookPagesField);

    addBookForm.reset();
})

function render(){
    const mainContent = document.querySelector("main");

    mainContent.innerHTML = "";

    myLibrary.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-card");

        bookDiv.setAttribute("data-id", book.id);

        bookDiv.innerHTML = `
            <h3>${book.name}</h3>
            <p>Autor: ${book.author}</p>
            <p>Páginas: ${book.pages}</p> 
        `;

        mainContent.appendChild(bookDiv);
    });
}
