// Creación de arrays
let bebidas = ["agua", "refresco", "cerveza"];
let comidas = ["filete", "verduras", "chuleta"];
let numbers = [3,6,9,12,15];

// Método inmutable concat para concatenar dos arrays
const consumibles = bebidas.concat(comidas);

// Método mutable push para agregar elementos al final a un array
bebidas.push("café");
consumibles.push("michelada", "pechuga");

// Método mutable unshift para agregar elementos al inicio a un array
bebidas.unshift("leche");

/* Método mutable splice para agregar elementos 
entre elementos a un array, el primer número es para elegir
el lugar dentro del array, si el segundo número es diferente a 0
se eliminan valores según el número */
bebidas.splice(2, 0, "té");

// Método mutable pop para eliminar elemento final a un array
let b = bebidas.pop();
console.log(b); // Muestra el elemento eliminado

console.log("-----------"); // Espacio en consola

// Método mutable shift para eliminar elemento inicial a un array
let b2 = bebidas.shift();
console.log(b2); // Muestra el elemento eliminado

console.log("-----------"); // Espacio en consola

// Indica la longitud del array
console.log(numbers.length); 

console.log("-----------"); // Espacio en consola

// Indica la posición del array al que nos referimos
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

console.log("-----------"); // Espacio en consola

/* Posición con método at, este al poner números negativos
te devuelve el elemento del array desde el final */
console.log(numbers.at(0));
console.log(numbers.at(1));
console.log(numbers.at(2));
console.log(numbers.at(3));
console.log(numbers.at(4));

console.log("-----------"); // Espacio en consola

console.log(numbers.at(-1));
console.log(numbers.at(-2));
console.log(numbers.at(-3));
console.log(numbers.at(-4));
console.log(numbers.at(-5));

console.log("-----------"); // Espacio en consola

// No existe esa posición y devuelve undefined
console.log(numbers[15]);

console.log("-----------"); // Espacio en consola

// Hace referencia al último elemento
console.log(numbers[numbers.length-1]);

console.log("-----------"); // Espacio en consola

// Ver el contenido del primero al último de todo un array con for
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("-----------"); // Espacio en consola

// Ver el contenido del último al primero de todo un array con for
for (let i = numbers.length -1; i >= 0; i--) {
    console.log(numbers[i]);
}

console.log("-----------"); // Espacio en consola

// Ver el contenido todo un array con foren una función
verArray(numbers);

console.log("-----------"); // Espacio en consola

verArray(bebidas);
function verArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

console.log("-----------"); // Espacio en consola

// Ver en el DOM el contenido todo un array con foren una función
showDom("Array1", numbers);
showDom("Array2", bebidas);
showDom("Array3", consumibles);
function showDom(elemento, arr) {
    document.getElementById(elemento).innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(elemento).innerHTML +=
            `<div>${arr[i]}<div>`;
    }
}

