//Objeto de reposo
const obj = {
    name: 'Oscar',
    age: 24,
    country: 'COL'
};

let { name, ...all } = obj;
console.log(all);


//Unir con Spread Operator varios OBJETOS
const obj1 = {
    name: 'Oscar',
    age: 24
};

const obj2 = {
    ...obj1,
    country: 'COL',
    game: 'Lol'
};

console.log(obj2);


//Promise.finally: Cuando ya finalizó la promesa
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó la ejecución'))


//Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);