// string
var myName = 'Alberto';
//myName = 27;
// number
var myAge = 27;
// myAge = '27';
//boolean
var hasHobbies = true;
// hasHobbies = 1;
// assing types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// arrays
var hobbies = ['Cooking', 'Sports'];
hobbies = [100];
console.log(hobbies[0]);
// tuples
var address = ['SuperStreet', 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var myCar = 'BMW';
myCar = { brand: "BMW", series: 3 };
console.log(myCar);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log('Hello!');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 10));
// function types
var myMultiply;
// myMultiply = sayHello; Error
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: "Alberto",
    age: 45
};
// complex object
var complex = {
    data: [100, 3.9, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.9, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
// myRealRealAge = true;
// check types
var finalValue = "This is a string";
if (typeof finalValue == "string") {
    console.log(finalValue);
}
// nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
