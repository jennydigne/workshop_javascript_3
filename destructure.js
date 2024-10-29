// Task 1: 
const fullName = ["John", "Doe"];

const [firstName, lastName] = fullName;

// Task 2: 
const user = {
  name: "Alice",
  age: 25,
};

const {name, age} = user;

// Task 3: 
console.log(firstName, lastName, name, age);

// Task 4: 
function getFullName ({firstName, lastName}) {
    return firstName + " " + lastName;
}

// Task 5: 
const person = {
  firstName: "Jane",
  lastName: "Smith",
};

console.log(getFullName(person));