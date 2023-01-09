const bookList = document.querySelector("#book-list_ul");
const title = document.querySelector("#input-title");
const author = document.querySelector("#input-author");
const buttonAdd = document.querySelector("#button-add");
const form = document.querySelector(".main-form");
const books_list = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const book = {
    title: title.value,
    author: author.value,
  };
  books_list.push(book);
  title.value = "";
  author.value = "";

  const bookItem = document.createElement("li");
  bookItem.classList.add("book-list_ul");
  bookItem.innerHTML = `
        <p class="books">${book.title}</p>
        <p class="books">${book.author}</p>
        <button class="remove">Remove</button>
        <div class="border">
    `;
  bookList.appendChild(bookItem);
});

// Remove books from the List
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.remove();
  }
});
