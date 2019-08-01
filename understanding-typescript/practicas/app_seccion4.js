// let & const
console.log("LET & CONST");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxElements = 100;
console.log(maxElements);
//maxElements = 99; Don't work
// Block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (val1, val2) {
    return val1 + val2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (val1, val2) { return val1 * val2; };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log("Hello!");
};
greet();
var greetFriend = function (friend) { return console.log("Hello " + friend); };
greetFriend("Manu");
// Default parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();
// Rest & spread
console.log("REST & SPREAD");
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max.apply(Math, numbers)); // Spread
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 6));
// Destructuring
console.log("DESTRUCTURING");
var myHobbies = ["Cooking", "Sports"];
var hobbie1 = myHobbies[0], hobbie2 = myHobbies[1];
console.log(hobbie1, hobbie2);
var userData = { name: "Max", age: 27 };
var myName = userData.name, myAge = userData.age;
console.log(myName, myAge);
// Template literals
console.log("TEMPLATE LITERALS");
var userName = "Alberto";
var greeting = "This is a heading!\nHello " + userName + "\nThis is cool!";
console.log(greeting);
