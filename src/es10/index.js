//Flat: Aplanado de Arrays, el nivel de profundidad se especifica
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

//Flatmap
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));


// trimStart: Eliminar espacios en blanco de las Strings
let hello = '            helllo world';
console.log(hello);
console.log(hello.trimStart());


// trimEnd: Eliminar espacios en blanco de las Strings
let hello2 = 'helllo world          ';
console.log(hello2);
console.log(hello2.trimEnd());


//Remover el argumento 'Error' a nuestra .catch en asincronismo
try {

} catch {
    error
}


//fromEntries: Objeto construido con key y valor desde Arrays
let entries = [['name', 'oscar'], ['age', 32]];

console.log(Object.fromEntries(entries));


//Descripción para objetos de tipo símbolo
let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);