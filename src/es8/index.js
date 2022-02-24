//  Object.entries: armar una matriz de los keys y los values
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);
//[
//     [ 'frontend', 'Oscar' ],
//     [ 'backend', 'Isabel' ],
//     [ 'design', 'Ana' ]
//   ]
console.log(entries.length); //3


//  Object.values
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const values = Object.values(data);
console.log(values); //[ 'Oscar', 'Isabel', 'Ana' ]


//padStart: Llenar los espacios con lo que configuremos
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -------'));


//Async Await: 
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}