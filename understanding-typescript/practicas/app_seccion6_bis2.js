var MyMath;
(function (MyMath) {
    var CircleMath;
    (function (CircleMath) {
        var PI = 3.14;
        function calculateCircumference(diameter) {
            return diameter * 2;
        }
        CircleMath.calculateCircumference = calculateCircumference;
    })(CircleMath = MyMath.CircleMath || (MyMath.CircleMath = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
// Ejemplo de importar ficheros. Luego se compila con 'tsc --outfile app_seccion6_bis2.ts' sin poner el resto de ficheros
/// <reference path="circumferenceMath.ts" />
/// <reference path="rectangleMath.ts" />
var Circle = MyMath.CircleMath;
var PI = 2.99; // Esto es para ver el scope de la constante PI. fuera del namespace toma este valor
console.log(Circle.calculateCircumference(3));
console.log(MyMath.calculateRectangle(2, 5));
console.log(PI);
