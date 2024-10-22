// // 1. Let & Const, String Literal, Arrow Function with Destructuring Object
// const calculateAge = (birthYear) => 2019 - birthYear;

// const yearUntilRetirement = ({ year, firstName }) => {
//     let age = calculateAge(year);
//     let retirement = 60 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//     } else {
//         console.log(`${firstName} is already retired.`);
//     }
// };

// yearUntilRetirement({ year: 1987, firstName: 'John' });


// // 2. Let & Const, Arrow Function with Destructuring Array and Rest Operator
// const addNumber = (a, b, ...rest) => {
//     let sum = a + b;
//     rest.map(number => sum += number);
//     return sum;
// };

// console.log(addNumber(1, 2, 3, 4, 5, 6, 7));


// // 3. Let & Const, String Literal, Arrow Function with Destructuring Object and Default Value
// const phi = 3.14;
// const calculateArea = ({ radius, power = 2 }) => phi * Math.pow(radius, power); // default value for power

// let radius = 21;
// const area21 = calculateArea({ radius });

// radius = 7;
// const area7 = calculateArea({ radius });

// console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);


// // 4. Arrow Function with Destructuring, Default Parameter, and Rest Operator
// const makeAjaxRequest = ({ url, method = 'GET' }) => {
//     console.log(url, method);
// };

// makeAjaxRequest({ url: 'www.google.com' });
