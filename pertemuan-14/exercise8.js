// // 1. Let & Const, String Literal, Arrow Function

// const calculateAge = (birthYear) => {
//     const currentYear = new Date().getFullYear();
//     return currentYear - birthYear;
// };
// const yearUntilRetirement = (object) => {
//     const age = calculateAge(object.year);
//     const retirement = 60 - age;

//     retirement > 0 
//         ? console.log(`${object.firstName} retires in ${retirement} years`)
//         : console.log(`${object.firstName} is already retired.`);
// };

// yearUntilRetirement({ year: 1987, firstName: 'John' });


// // 2. Let & Const, Arrow Function, Spread Operator

// const addNumber = (...numbers) => {
//     let sum = 0;
//     numbers.forEach(number => sum += number);
//     return sum;
// };

// console.log(addNumber(1, 2, 3, 4, 5, 6, 7));


// // 3. Let & Const, String Literal, Arrow Function

// const phi = 3.14;
// const calculateArea = (obj) => phi * Math.pow(obj.radius, obj.power);

// let area21 = calculateArea({ radius: 21, power: 2 });
// let area7 = calculateArea({ radius: 7, power: 2 });
// console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);


// // 4. Arrow Function, Default Parameter

// const makeAjaxRequest = (url, method = 'GET') => {
//     if (!url) {
//         console.error('URL is required');
//         return;
//     }
//     console.log(`Request made to ${url} with method ${method}`);
// };

// makeAjaxRequest('www.google.com');
