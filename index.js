// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function numParImpar(numero){
    console.log("Ejercicio 1:");
    if (numero%2==0){
        console.log("El numero " +numero + " es par");

    }
    else{
        console.log("El numero " +numero + " es impar");
    }
}

numParImpar(2)
numParImpar(99)

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es,
//  indicar por consola que son iguales.

function numMayor(num1, num2){
    console.log("Ejercicio 2:")
    if(num1 === num2){
        console.log("El numero "+ num1 + " y el numero " + num2 + " son iguales.");
    }else if(num1 > num2){
        console.log("El numero mayor entre " + num1+" y " + num2 + " es " + num1);
    }else{
        console.log("El numero mayor entre " + num1+ " y " + num2 + " es " + num2);
    }
}
numMayor(1,0);
numMayor(2,5);
numMayor(44,44);



// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiploDeCinco(numero){
    console.log("Ejercicio 3:")
    if(numero%5==0){
        console.log("El numero " + numero + " es divisible por 5" );
    }
    else{
        console.log("El numero " + numero + " no es divisible por 5");
    }
}

multiploDeCinco(25);
multiploDeCinco(78);


// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function mostrarNumeroHasta(numero){
    console.log("Ejercicio 4:")
    for(let i=0; i<=numero; i++){
        console.log(i);
    }
    console.log("Fin.");
}

mostrarNumeroHasta(12);
mostrarNumeroHasta(5);


// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad
//  correspondiente al número indicado.

function imprimirPalabra(palabra, numero){
    console.log("Ejercicio 5:")
    for (let i = 0; i < numero; i++) {
        console.log(palabra);
      }
}
imprimirPalabra(" vieja loca ", 3);


// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.


function mostrarLista(array){
    console.log("Ejercicio 6:")
    console.log("Array de la función");
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

mostrarLista([1,4,7,4,3]);
mostrarLista([64,3474,382,913,65]);


// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos 
// el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function mostarArrayExcepto5Posicion(array){
    console.log("Ejercicio 7:")
    console.log("Mostrando array de 10 elementos excepto el 5: ");
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) {
          console.log(array[i]);
        }
      }
    }    
    
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
mostarArrayExcepto5Posicion(array);


// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del 
// array multiplicado por el número pasado por parámetro.

function multiplicarArrayPorUnNumero(array, numero){
    console.log("Ejercicio 8:")
    console.log("Array multiplicado por el numero ingresado: ");
    for(i=0; i<array.length; i++){
        console.log(array[i] * numero);
    }
}

multiplicarArrayPorUnNumero([3,5,2,6,7,1,5], 2);