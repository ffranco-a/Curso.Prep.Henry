// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var resto = '';
  for (i=1;i<nombre.length;i++) {    // Espero que usar un bucle for en este caso no sea erróneo. Sé que pude resolver 
    resto+=nombre[i];                // el problema, pero no supe cómo incorporar los métodos nuevos a mi solución.
  }
  return nombre.charAt(0).toUpperCase() + resto; 
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = numeros.reduce(function(acc, cur) {  // Lamentablemente aún no domino bien la sintaxis de .reduce y .map, que contengan
    return acc + cur;                             // una función (callback) me despista! todavía me enriedo entre argumentos y variables.
  }); 
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(elemento) {
    cb(elemento);
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray = array.map(function(elemento) {  // Mi primer impulso fue crear un array vacío para colocar ahí los elementos, pero luego
    return cb(elemento);                           // recordé que .map devuelve un array, y que por lo tanto no era necesario crear uno vacío!
  })
  return nuevoArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArray = [];                             // Aquí sí necesité crear uno vacío, porque no usé el método .map, sino el .forEach, que 
  array.forEach(function(elemento) {               // entiendo que por defecto no devuelve nada ("undefined").
    if (elemento.charAt(0) == 'a') {
      nuevoArray.push(elemento);
    }
  })
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
