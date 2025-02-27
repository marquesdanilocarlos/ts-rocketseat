/**
 * Partial
 */
interface User {
    name: string;
    age: number;
    email: string;
}

const newUser: User = {name: 'Danilo', age: 33, email: 'marquesdanilocarlos@gmail.com'};
console.log(newUser);

const updatedUser: Partial<User> = {name: 'Juvenal'};
console.log(updatedUser);

/**
 * Pick
 */

interface Book {
    title: string,
    pages: number,
    author: string,
    description: string
}

const book1: Pick<Book, 'title'> = {title: 'Livro 1'};
console.log(book1);
const book2: Pick<Book, 'title' | 'pages'> = {title: 'Livro 2', pages: 532};
console.log(book2);

/**
 * Omit
 */
const book: Omit<Book, 'description'> = {title: 'Livro 3', pages: 300, author: 'Danilo'};
console.log(book);