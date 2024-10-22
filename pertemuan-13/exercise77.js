//Nama : Violin Tuju

//1
const yearUntilRetirement = ({ year, firstName }) => {
    let age = calculateAge(year);
    let retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
};

//2
const addNumber = ([a, b, c, d, e, f, g]) => {
    let sum = 0;
    [a, b, c, d, e, f, g].map(number => sum += number);
    return sum;
};

//3 Let & Const, String Literal, Arrow Function with Destructuring Object and Default Value
const phi = 3.14;
const calculateArea = ({ radius, power = 2 }) => phi * Math.pow(radius, power); // default value for power

let radius = 21;
const area21 = calculateArea({ radius });

radius = 7;
const area7 = calculateArea({ radius });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

//4 Arrow Function with Destructuring, Default Parameter, and Rest Operator
const makeAjaxRequest = ({ url, method = 'GET' }) => {
console.log(url, method);
};

makeAjaxRequest({ url: 'www.google.com' });


