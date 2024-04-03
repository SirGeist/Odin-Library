const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = "";

  // Looping through the library array while assigning each
  // component of the book
  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    const titlePara = document.createElement("p");
    titlePara.textContent = `Title: ${book.title}`;

    const authorPara = document.createElement("p");
    authorPara.textContent = `Author: ${book.author}`;

    const pagesPara = document.createElement("p");
    pagesPara.textContent = `Pages: ${book.pages}`;

    const readPara = document.createElement("p");
    readPara.textContent = `Read: ${book.read ? "Yes" : "No"}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    // Redisplay the current selection of books available after
    // removal
    removeButton.addEventListener("click", () => {
      removeBook(index);
      displayBooks();
    });

    // Redisplaying the read status after click has been detected
    const toggleReadButton = document.createElement("button");
    toggleReadButton.textContent = "Toggle Read";
    toggleReadButton.addEventListener("click", () => {
      toggleReadStatus(index);
      displayBooks();
    });

    // Appending each component of the book
    bookDiv.appendChild(titlePara);
    bookDiv.appendChild(authorPara);
    bookDiv.appendChild(pagesPara);
    bookDiv.appendChild(readPara);
    bookDiv.appendChild(removeButton);
    bookDiv.appendChild(toggleReadButton);

    // Finally appending the book to the library
    libraryDiv.appendChild(bookDiv);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
}

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
}

// Every time we create a new book, we style it in block format
document.getElementById("new-book-btn").addEventListener("click", () => {
  const formDiv = document.getElementById("new-book-form");
  formDiv.style.display = "block";
});

// When we input information into our forms
document.getElementById("book-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  // Creating a new instance called newBook with the properties passed on
  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  // Reseting the form fields after submitting
  document.getElementById("book-form").reset();
  document.getElementById("new-book-form").style.display = "none";

  displayBooks();
});
