//Book Class: Represent a book

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Class: Handle UI tasks

class UI {
    static displayBooks() {
       const StoredBooks = [
           {
               title: 'Book One',
               author: 'John Doe',
               isbn: '3434434'
           },
           {
               title: 'Book Two',
               author: 'Jane Doe',
               isbn: '4550925';
           }
       ];
       
       const books = StoredBooks;

       books.forEach(book => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete"X</a></td>
        `;

        list.appendChild(row);
    }
}

//Store Class: Handles storage

//Event: Display books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a book

//Event: Delete a book