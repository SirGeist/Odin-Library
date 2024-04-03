const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {}

function displayBooks() {
  const libraryDiv = document.getElementById("library");
  bookDiv.classList.innerHTML = "";

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

    bookDiv.appendChild(titlePara);
    bookDiv.appendChild(authorPara);
    bookDiv.appendChild(pagesPara);
    bookDiv.appendChild(readPara);

    libraryDiv.appendChild(bookDiv);
  });
}
