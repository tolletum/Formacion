// Exercise 1
class Car {
    name: string;
    acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk(): void { 
        console.log("Toooooooooot!");
    }

    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}
let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


// Exercise 2
class BaseObject {
    protected width: number = 0;
    protected length: number = 0;

    constructor(width: number, length: number) {
        this.width = width;
        this.length = length;
    }
}
class Rectangle extends BaseObject {

    calcSize(): number {
        return this.length * this.width;
    }
}
const rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());

// Exercise 3
class Person {
    private _firstName: string = "";

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }

    }
}
const person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
