//Array di mana kita boleh menyimpan banyak data dalam satu data
//Array in JavaScript

//Cara 1. Array Literal
//let numbers = [1, 2, 3, 4, 5];
//console.log(numbers);

//Cara 2. Kata kunci new
//let numbers = new Array(6, 7, 8, 9, 10);
//console.log(numbers2);

//Tipe data yang bisa di simpan dalam array
//let numbers = [1, 2, 3, 4, 5]; //numbers
//let students = ["winni", "bela", "gege"]; //string
//let winni = ["winni", 20, true, [80, 90, 100]]; //mixed
//console.log(winni);

//array length
//console.log(numbers.length); //5
//console.log(students.length); //3
//console.log(winni.length); //4

//Cara mengakses element/data tertentu dalam array
//Melalui index array. Index selalu dimulai dari 0
//console.log(numbers[2]); //3
//console.log(students[1]); //Jane
//console.log(winni[2]); //true
//console.log(winni[3[1]]); //90

//Mengakses element/data terakhir dalam array
//let numbers2 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(numbers2[numbers2.length - 1]);

//Array Method
//let array = [1, 2, 3, "hello", false, true];
//console.log(array);

//1. toString()
//console.log(array.toString());
//2. join()
//console.log(array.join());
//console.log(array.join(" "));
//console.log(array.join("-"));
//console.log(array.join("#"));
//3 pop() //untuk menghapus yang paling akhir
//array.pop();
//console.log(array);
//4 push() //untuk menambah data paling akhir
//array.push("Selamat pagi");
//console.log(array);
//5 shift()
//array.shift();
//console.log(array);
//6 array,unshift()
//array.shift()
//console.log(array);
//7. splice() untuk menghapus data di tenga
//array.splice(2, 1,); //hapus
//console.log (array);
//array.splice(1, 1, 1); //ganti
//console.log(array);
//array.splice(2, 0, 2, 3); //tamba
//console.log(array);

//8. array.contact()
//let buah = ["pisang", "apel", "jeruk"];
//let sayur = ["tomat", "bayam", "wortel"];
//let biji = ["kedelai", "kacang tanah", "kacang polong"];

//let makanan = buah.concat(sayur, biji);
//console.log(makanan);

//9. array.slice()
//let sayuran = makanan.slice(3, 6);
//let bijian = makanan.slice(6;)
//console.log(array);
