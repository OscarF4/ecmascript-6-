//--Parámetros por defecto--

//Antes
function newFunction(name, age, country) {
    let userName = name || 'Oscar';
    let userAge = age || 24;
    let userCountry = country || 'COL'
    console.log(userName, userAge, userCountry);
}
newFunction();

//ES6: Desde la asignación de los parámetros
function newFunctionES6(name = 'Oscar', age = 24, country = 'COL') {
    console.log(name, age, country);
}
newFunctionES6();
newFunctionES6('Ricardo', 33, 'MX');

//Concatenación con Template Strings
let myName = 'Oscar';
let lastName = 'Acevedo';
console.log(`Mi nombre es: ${myName} ${lastName}`);