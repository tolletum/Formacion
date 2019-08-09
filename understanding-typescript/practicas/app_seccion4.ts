// let & const
console.log("LET & CONST")
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxElements = 100;
console.log(maxElements);
//maxElements = 99; Don't work

// Block scope
function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// Arrow functions
console.log("ARROW FUNCTIONS");
const addNumbers = function(val1: number, val2: number): number {
    return val1 + val2;
}
console.log(addNumbers(10,3));

const multiplyNumbers = (val1: number, val2: number) => val1 * val2;
console.log(multiplyNumbers(10,3));

const greet = () => {
    console.log("Hello!");
}
greet();
const greetFriend = friend => console.log("Hello " + friend);
greetFriend("Manu");

// Default parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10) => {
    console.log(start);
    while(start > 0 ) {
        start--;
    }
    console.log("Done!", start);
}
countdown();

// Rest & spread
console.log("REST & SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers)); // Spread

function makeArray(...args: number[]) { // Rest
    return args;
}
console.log(makeArray(1, 2, 6));

// Destructuring
console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sports"];
const [hobbie1, hobbie2] = myHobbies;
console.log(hobbie1, hobbie2);

const userData = {name: "Max", age: 27};
const {name: myName, age: myAge} = userData;
console.log(myName, myAge);

// Template literals
console.log("TEMPLATE LITERALS");
const userName = "Alberto";
const greeting = `This is a heading!
Hello ${userName}
This is cool!`;
console.log(greeting);