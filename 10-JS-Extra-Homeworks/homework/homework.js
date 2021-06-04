// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var resultado = [];
  for (var clave in objeto) {
    var actual = [];
    actual.push(clave);
    actual.push(objeto[clave]);
    resultado.push(actual);
  }
  return resultado;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var resultado = {};
    for (var i=0; i<string.length; i++) {
      if (!resultado.hasOwnProperty(string[i])){
      resultado[string[i]] = 1;
      } else if (resultado.hasOwnProperty(string[i])){
      resultado[string[i]]++;
      }
    }
  return resultado;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var minusculas = "";
  var mayusculas = "";
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayusculas+=s[i];
    } else if (s[i]===s[i].toLowerCase()) {
      minusculas+=s[i];
    }
  }
  return mayusculas+minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var spacesAndEnd = [];  // Aquí voy a almacenar los espacios de la oración, para encontrar los límites de las palabras que luego debo invertir.
  for (var i=0;i<str.length;i++) {  // Bucle for para encontrar esos espacios.
    if (str[i]===' ') {
      spacesAndEnd.push(i);
    }
  }
  spacesAndEnd.push(str.length);  // Agrego también el final de la oración, para luego poder invertir también la última palabra.
  var mirror = '';
  var current = 0;
  for (var j=0; j<spacesAndEnd.length; j++) {          // En estos dos bucles voy palabra por palabra invirtiendo los caracteres del string:
    for (var k=spacesAndEnd[j]-1; current<=k; k--) {   // espacio por espacio voy invirtiendo los caracteres, porque los sumo al mirror con los
      mirror+=str[k];                                  // índices de mayor a menor (k va disminuyendo) entre los límites de las posiciones de los espacios.
    }
    if (mirror.length===str.length) {     // como luego en la línea 81 yo manualmente voy sumando los espacios, acá necesitaba frenar eso para no tener 
      break;                              // un resultado con un espacio al final. Por eso el break una vez que el mirror y el original miden lo mismo.            
    }
    mirror+=' ';
    current = spacesAndEnd[j];            // Estoy seguro que existen formas más sofisticadas (y eficientes) de resolver esto, pero es lo que se me ocurrió.
    current++;
  }
  return mirror;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var stringDelNumero = numero.toString();
  var stringInvertido = '';
  for (var i=0; i<stringDelNumero.length; i++) {
    stringInvertido = stringDelNumero[i] + stringInvertido;  // A esta forma de invertir una string la saqué de una de las clases/charlas! 
  }
  if (stringDelNumero===stringInvertido) {
    return 'Es capicua';
  } else return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var newString = '';
  for (var i=0; i<cadena.length; i++) {
    if ( cadena[i]!=='a' && cadena[i]!=='b' && cadena[i]!=='c' ) {
      newString+=cadena[i];
    }
  }
  return newString;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  // var inOrder = [];
  for (var i=0; i<arr.length; i++) {
    for (var j=i+1; j<arr.length; j++) {
      if (arr[i].length>arr[j].length) {
        var aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
      }
    }    
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var interseccion = [];
  arreglo1.forEach(function(elemento) {
    arreglo2.forEach(function(element) {
        if(elemento===element) {
          interseccion.push(elemento);
        }
    })
  })
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

