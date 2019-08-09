// string
let myName = 'Alberto';
//myName = 27;

// number
let myAge = 27;
// myAge = '27';

//boolean
let hasHobbies = true;
// hasHobbies = 1;

// assing types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// arrays
let hobbies: any = ['Cooking', 'Sports'];
hobbies = [100];
console.log(hobbies[0]);

// tuples
let address: [string, number] = ['SuperStreet', 99];

// enum
enum Color {
    Gray, // 1
    Green = 100,
    Blue = 2
}
let myColor: Color = Color.Green;
console.log(myColor);

// any
let myCar: any = 'BMW';
myCar = { brand: "BMW", series: 3};
console.log(myCar);

// functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello() {
    console.log('Hello!');
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(2, 10));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello; Error
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: {name: string, age: number} = {
    name: "Alberto",
    age: 45
};

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.9, 10],

    output: function(all: boolean): number[] {
        return this.data;
    }
};
// complex = {};

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};
let complex2: Complex = {
    data: [100, 3.9, 10],

    output: function(all: boolean): number[] {
        return this.data;
    }

}

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true;

// check types
let finalValue = "This is a string";
if(typeof finalValue == "string") {
    console.log(finalValue);
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny: number | null = null;
canThisBeAny = 12;