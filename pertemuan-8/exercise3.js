// Deklarasi Object
let person = {
    firstName: "Winni",
    weight: 42, // berat dalam kg
    height: 154, // tinggi dalam cm
    calculateBMI: function () {
        let heightInMeters = this.height / 100; // Konversi tinggi ke meter
        let bmi = this.weight / (heightInMeters * heightInMeters); // Hitung BMI
        this.BMI = bmi;  // Tambah properti BMI ke dalam object
        return bmi;
    },

getBMICategory: function () {
let bmi = this.calculateBMI();
if (bmi < 16.0) {
    return "Severely Underweight";
} else if (bmi >= 16.0 && bmi <= 18.4) {
    return "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal";
} else if (bmi >= 25.0 && bmi <= 29.9) {
    return "Overweight";
} else if (bmi >= 30.0 && bmi <= 34.9) {
    return "Moderately Obese";
} else if (bmi >= 35.0 && bmi <= 39.9) {
    return "Severely Obese";
} else {
    return "Morbidly Obese";
}
}
};