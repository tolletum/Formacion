var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * 2;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
// Ejemplo de separar en ficheros con el mismo namespace
var PI = 2.99; // Esto es para ver el scope de la constante PI. fuera del namespace toma este valor
console.log(MyMath.calculateCircumference(3));
console.log(MyMath.calculateRectangle(2, 5));
console.log(PI);
