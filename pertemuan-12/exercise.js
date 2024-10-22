//String literals, Arrow Function &
//Default Parameter

// 1. String Literal
let fullName = "John Doe"
let age = 30;
let address = "Manado"

//Halo nama saya John Doe, umur saya 33 tahun
//dan saya tinggal di Manado

let kalimat1 =
"Halo nama saya" +
fullName = 
", umur saya" +
age +
" tahun dan saya tinggal" +
address

console.log(kalimat);

let kalimat2 =`Halo nama saya ${fullName}, umur saya ${age} tahun saya tinggal ${address}`;
console.log(kalimat2);

// 1. Array Function
function sayGreetings(fullName) {
    return `Hello my name is ${fullName}`
}
console.log(sayGreetings("John Doe"));

const sayGreetings2 = (fullName) => `Hello my name is ${fullName}`;
console.log(sayGreetings2("John Doe"));

//Arrow function pada IIFE
let output = (() => "Hello")();
console.log(output);

//Arrow function pada callback
let numbers = [1, 2, 3, 4, 5,]
let output2 = numbers.map((item) => item);
console.log(output2);

// 3. Default parameter
const sayGreetings3 = (fullName) => {
    fullName = "John Doe";
}
if (age === undefined) {
    age = "30";
}
if (address === undefined) {
    addres = "Manado";
}
console.log



}