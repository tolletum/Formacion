namespace MyMath {
    const PI = 3.14;

    export function calculateCircumference(diameter: number) {
        return diameter * 2;
    }

    export function calculateRectangle(width: number, length: number) {
        return width * length;
    }
}

const PI = 2.99; // Esto es para ver el scope de la constante PI. fuera del namespace toma este valor
console.log(MyMath.calculateCircumference(3));
console.log(MyMath.calculateRectangle(2, 5));
console.log(PI);