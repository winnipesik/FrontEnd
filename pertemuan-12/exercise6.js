// //1. Let & Const, String Literal, Arrow Function
// const calculateAge = (birthYear) => 2019 - birthYear;

// const yearUntilRetirement = (object) => {
//     let age = calculateAge(object.year);
//     let retirement = 60 - age;

//     if (retirement > 0) {
//         console.log(`${object.firstName} retires in ${retirement} years`);
//     } else {
//         console.log(`${object.firstName} is already retired.`);
//     }
// };

// yearUntilRetirement({year: 1987, firstName: 'John'});

// //2. Let & Const, Arrow Function
// const addNumber = (a, b, c, d, e, f, g) => {
//     let numbers = [a, b, c, d, e, f, g];
//     let sum = 0;
//     numbers.map(number => sum += number);
//     return sum;
// };

// console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// //3. Let & Const, String Literal, Arrow Function
// const phi = 3.14;
// const calculateArea = (obj) => phi * Math.pow(obj.radius, obj.power);

// let radius = 21;
// const area21 = calculateArea({ radius, power: 2 });

// radius = 7;
// const area7 = calculateArea({ radius, power: 2 });

// console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// //4. Arrow Function, Default Parameter
// const makeAjaxRequest = (url, method = 'GET') => {
//     console.log(url, method);
// };

// makeAjaxRequest('www.google.com');