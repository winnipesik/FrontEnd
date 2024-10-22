//Ubah/Modifikasi Exercise 1
//menggunakan
//1. IIFE
//2. Callback Function

//1. IIFE
(function(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    console.log(output);
})(42, 1.5);

//2. Callback
function hitungBMI(berat, tinggi, callback) {
    let output = berat / (tinggi * tinggi);
    return(output);
}

hitungbmi(42, 1.5, function(output) {
    console.log(output);
});