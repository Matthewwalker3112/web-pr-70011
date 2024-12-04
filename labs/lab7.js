

// Library object
const library = {
    books: [],
    users: [],
    
    // Add a new book to the library
    addBook: function (title, author, rating) {
        const book = {
            title: title,
            author: author,
            rating: rating,
            available: true
        };
        this.books.push(book);
        console.log(`Book '${title}' added to the library.`);
    },
    
    // Add a new user to the library
    addUser: function (name, age) {
        const user = { name: name, age: age };
        this.users.push(user);
        console.log(`User '${name}' added to the library.`);
    },
    
    // Check out a book for a user
    checkOutBook: function (userName, bookTitle) {
        const user = this.users.find(u => u.name === userName);
        const book = this.books.find(b => b.title === bookTitle);

        if (!user) {
            console.log(`User '${userName}' not found.`);
            return;
        }

        if (!book) {
            console.log(`Book '${bookTitle}' not found.`);
            return;
        }

        if (!book.available) {
            console.log(`Book '${bookTitle}' is currently unavailable.`);
            return;
        }

        if (user.age < book.rating) {
            console.log(`User '${userName}' is not eligible to check out '${bookTitle}' due to age restriction.`);
            return;
        }

        book.available = false;
        console.log(`User '${userName}' successfully checked out '${bookTitle}'.`);
    },

    // List all available books in the library
    listAvailableBooks: function () {
        console.log("Available Books:");
        this.books.forEach(book => {
            if (book.available) {
                console.log(`- ${book.title} by ${book.author} (Rating: ${book.rating})`);
            }
        });
    },

    // List all registered users
    listUsers: function () {
        console.log("Registered Users:");
        this.users.forEach(user => {
            console.log(`- ${user.name} (Age: ${user.age})`);
        });
    },

    // Return a book
    returnBook: function (bookTitle) {
        const book = this.books.find(b => b.title === bookTitle);

        if (!book) {
            console.log(`Book '${bookTitle}' not found.`);
            return;
        }

        if (book.available) {
            console.log(`Book '${bookTitle}' is already available.`);
            return;
        }

        book.available = true;
        console.log(`Book '${bookTitle}' has been returned and is now available.`);
    }
};

// Testing the library app
// Initialize with sample books and users
library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 18);
library.addBook("Harry Potter", "J.K. Rowling", 12);
library.addBook("To Kill a Mockingbird", "Harper Lee", 15);

library.addUser("Alice", 20);
library.addUser("Bob", 10);

// Display books and users
library.listAvailableBooks();
library.listUsers();

// Attempt to check out books
library.checkOutBook("Alice", "The Great Gatsby"); // Eligible
library.checkOutBook("Bob", "The Great Gatsby");   // Age restriction
library.checkOutBook("Bob", "Harry Potter");       // Eligible

// Return a book
library.returnBook("The Great Gatsby");

// Display books and users again
library.listAvailableBooks();
library.listUsers();