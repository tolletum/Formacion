// Ejemplo de importar ficheros. Luego se compila con 'tsc --outfile app_seccion6_bis2.ts' sin poner el resto de ficheros
/// <reference path="circumferenceMath.ts" />
/// <reference path="rectangleMath.ts" />

import Circle = MyMath.CircleMath;
const PI = 2.99; // Esto es para ver el scope de la constante PI. fuera del namespace toma este valor
console.log(Circle.calculateCircumference(3));
console.log(MyMath.calculateRectangle(2, 5));
console.log(PI);