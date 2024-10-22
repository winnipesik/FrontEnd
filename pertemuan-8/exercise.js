//JacaScript Object & Conditional
//Deklarasi Object
//Object Literal
let john = {
    firstName: "Fingky",
    age: 24,
    isMarried: true,
    grade: [80, 90, 100],
};
console.log(Fingky)

//Mengakses properti dalam object
//1. Dot notation
console.log(Fingky.firstName); //Fingky
console.log(Fingky.age); //24
Fingky.age = 24; //Ubah nilai
console.log(Fingky);
Fingky.job = "Fishing"; //Tambah properti baru
console.log(Fingky);
//2. Braket notation
console.log(Fingky["isMarried"]); //true
Fingky["nationality"] = "Indonesia"; //Tambah properti
console.log(Fingky);

//JavaScript Conditional
//1. if - else
//Jika suhu hari ini lebih dari atau sama dengan 37,
//tampilkan suhu hari ini panas
//jika tidak tampilkan suhu hari ini dingin

let temp = 37;
if (temp >= 37) {
    console.log("Suhu hari ini panas");
}else{
    console.log("Suhu hari ini dingin");
}

//if - else if - else
//Jika nilai 100 - 80 tampilkan grade A
//Jika nilai 70 - 89 tampilkan grade B
//Jika nilai 50 - 68 tampikan grade C
//Jika nilai dibawah 50 tampilkan grade D
let grade = 100
if(grade >= 80 && grade <= 100){
    console.log("Grade A");
} else if(grade >= 70 && grade < 80){
    console.log("Grade B");
}else if(grade >= 50 && grade < 70){
    console.log("Grade C");
}else {
    console.log("Grade D");
}

//Switch - case
//Jika angka 1 tampilkan January
//Jika angka 2 tampilkan February
//Jika angka 3 tampilkan Maret
// :
//Jika angka 12 tampilkan Desember
let number = 2;
switch (cumber) {
    case 1:
        console.log
}
