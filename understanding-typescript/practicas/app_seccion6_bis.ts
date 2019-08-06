// Ejemplo de separar en ficheros con el mismo namespace.
// Se puede poner todo en el index.hyml como:
//         <script src="app_seccion6.js"></script>
//          <script src="rectangleMath.js"></script>
//          <script src="circumferenceMath.js"></script>
// O en una linea desde el comando tsc de la siguiente forma:
// tsc --outFile app_seccion6_bis.js rectangleMath.ts circumferenceMath.ts app_seccion6_bis.ts

const PI = 2.99; // Esto es para ver el scope de la constante PI. fuera del namespace toma este valor
console.log(MyMath.calculateCircumference(3));
console.log(MyMath.calculateRectangle(2, 5));
console.log(PI);