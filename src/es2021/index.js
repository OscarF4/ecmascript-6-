//replaceAll: replace solo reemplazaba el primer 
const string = 'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web';

const replacedString = string.replace('JavaScript', 'Python');
console.log(replacedString);

//Bueno para cuando queremos censurar palabras y transformarlas en **
const replacedAllString = string.replaceAll('JavaScript', 'Python');
console.log(replacedAllString);


//Métodos privados (#)
class Message {
    #show(val) {
        console.log(val);
    };
    get #add(val) {

    }
}

const message = new Message();
message.show('Hola!');


//Promise.any: Primer valor que se resuelva
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response)); //2


//weakRef
class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element);
    }
}


// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);