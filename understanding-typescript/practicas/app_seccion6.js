var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * 2;
    }
    MyMath.calculateCircumference = calculateCircumference;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
var PI = 2.99; // Esto es para ver el scope de la constante PI. fuera del namespace toma este valor
console.log(MyMath.calculateCircumference(3));
console.log(MyMath.calculateRectangle(2, 5));
console.log(PI);
