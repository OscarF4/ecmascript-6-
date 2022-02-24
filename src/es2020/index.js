//Dynamic import: Llamar piezas de código solo cuando las necesitamos
const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    const module = await import('./file.js');
    module.hello();
});


//bigInt: Para trabajar con números más grandes que el tope
const bigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(bigNumber);
console.log(anotherBigNumber);


//Promise.allSettled: Cuando todas sean resueltas, ejecutará lógica.
//Mientras que Promise.all será rechazada cuando una sea rechazada
const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));


Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))


//globalThis
console.log(window);
console.log(globalThis);


//Si es nulo el valor '??'
const foo = null ?? 'default string';
console.log(foo); //Como le pusimos null, será 'default string'


//Optional Chaining: SI el valor no existe, lo vuelve UNDEFINED
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email');
} else {
    console.log('Fail');
}s