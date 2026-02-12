const addBookForm = document.querySelector("dialog");
const addBookButton = document.querySelector(".add-book-btn");
const addBookSubmitButton = document.querySelector(".add-book-submit");
const closeFormButton = document.querySelector(".close-btn");

addBookButton.addEventListener("click", () => {
    addBookForm.showModal();
});

closeFormButton.addEventListener("click", () => {
    addBookForm.close();
});

let myLibrary = [];

function Book(author, name, pages, readOrNot){
    this.author = author;
    this.name = name;
    this.pages = pages;
    this.readOrNot = readOrNot;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(author, name, pages, readOrNot){
    const newBook = new Book(author, name, pages, readOrNot);
    myLibrary.push(newBook);
}

function sendBookToLibrary(){
    const authorNameField = document.querySelector(".author-name").value;
    const bookNameField = document.querySelector(".book-title").value;
    const pagesNumberField = document.querySelector(".book-pages").value;
    const readOrNotCheckBox = document.querySelector(".read-or-not").checked;
    
    addBookToLibrary(authorNameField, bookNameField, Number(pagesNumberField), readOrNotCheckBox);
}

function displayCard(){
    let bookCardContainer = document.querySelector(".book-container");
    
    if (!bookCardContainer){
        bookCardContainer = document.createElement("div");
        bookCardContainer.classList.add("book-container");
        document.querySelector("main").appendChild(bookCardContainer);
    }

    bookCardContainer.innerHTML = "";

    myLibrary.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        let readStatus = '';
        if (book.readOrNot === true) {
            readStatus = '<p>Already read</p>';
        }

        bookCard.innerHTML = `
            <h2>${book.name}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            ${readStatus}
        `;

        bookCardContainer.appendChild(bookCard);
    });
}

addBookForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const addBookText = document.querySelector(".add-book");
    addBookText.style.fontSize = "0.8em";
    addBookButton.style.width = "50px";
    addBookButton.style.height = "50px";
    addBookText.style.flexDirection = "row";
    addBookText.style.gap = "15px";
    
    const main = document.querySelector("main");
    main.style.flexDirection = "column";
    main.style.alignItems = "center";
    main.style.justifyContent = "flex-start";
    main.style.gap = "30px";
    main.style.paddingTop = "20px";
    main.insertBefore(addBookText, main.firstChild);

    sendBookToLibrary();
    displayCard();
    
    addBookForm.querySelector("form").reset();
    addBookForm.close();
});
