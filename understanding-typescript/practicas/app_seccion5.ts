class Person {
    name: string;
    private type: string;
    protected age: number = 27;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType("Old Guy");
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Alberto", "tolletum");
console.log(person);
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool Guy"); Don't work with private

// Inheritance
class Alberto extends Person {
    // name = "Alberto";
    constructor(username: string) {
        super("Alberto", username);
        this.age = 45;
    }
}
const alberto = new Alberto("alberto");
console.log(alberto);

// Getter & Setter
class Plant {
    private _species: string = "Default"

    get species() {
        return this._species;
    }

    set species(value: string) {
        if(value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}
let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);

// Static properties & methods
class Helpers {
    static PI: number = 3.14;

    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(Helpers.PI * 2);
console.log(Helpers.calcCircumference(8));

// Abstract class
abstract class Project {
    name: string = "default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.name = name;
    }
}
let itProject = new ITProject();
console.log(itProject);
itProject.changeName("My IT project");
console.log(itProject);

// Private constructors & singleton

class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) {} // Añadimos readonly para ver propiedades de solo lectura

    static getInstance() {
        if(!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One!");
        }
        return OnlyOne.instance;
    }
}
// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right);