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
       ] 
    }
}

//Store Class: Handles storage

//Event: Display books

//Event: Add a book

//Event: Delete a book