interface User {
    name: string;
    age: number;
    email: string;
}

const newUser: User = {name: 'Danilo', age: 33, email: 'marquesdanilocarlos@gmail.com'};
console.log(newUser);

const updatedUser: Partial<User> = {name: 'Juvenal'};
console.log(updatedUser);