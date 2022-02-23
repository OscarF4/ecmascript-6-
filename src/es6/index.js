//--Parámetros por defecto--

//Antes
function newFunction(name, age, country) {
    let userName = name || 'Oscar';
    let userAge = age || 24;
    let userCountry = country || 'COL'
    console.log(userName, userAge, userCountry);
}
newFunction();

//es6: Desde la asignación de los parámetros
function newFunctionES6(name = 'Oscar', age = 24, country = 'COL') {
    console.log(name, age, country);
}
newFunctionES6();
newFunctionES6('Ricardo', 33, 'MX');


//Concatenación con Template Strings
let myName = 'Oscar';
let lastName = 'Acevedo';
console.log(`Mi nombre es: ${myName} ${lastName}`);


// Multilinea: Para tener saltos de línea y no escribir "\n"
//Con los Template Literals viene por defecto el comportamiento
let lorem = `Hola, esta frase necesita un salto de linea.
Aquí inicia otra línea.`
console.log(lorem);


//Desestructuración: Con esto, podemos crear en una sola línea varias variables que vengan de un mismo objeto.
let person = {
    name: 'Oscar',
    age: 24,
    country: 'MX'
}

let { name, age, country } = person;
console.log(name, age, country);

//Spread Operator (...)
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education); // [David, Oscar, Julian...]


//Objetos
let name = 'Oscar';
let age = 24;

//es5
obj = { name: name, age: age };
objECMA = { name, age }
//es6
console.log(objECMA);


//Arrow Functions: Funciones anónimas
const names = [
    { name: 'Oscar', age: 24 },
    { name: 'Yesica', age: 27 }
];
let listOfNames = names.map(item => item.name);
console.log(listOfNames);
//multiples parámetros
const listOfNames2 = (name, age, country) => {};
//un solo parámetro
const listOfNames2 = name => {};


//Promises: Asincronismo (resolve y reject)
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
};

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))


//Class Para manejar los prototipos
class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sumar(2,3));