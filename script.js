// untuk membuat semua tombol hitung BMI dan reset dapat berjalan
const btn = document.getElementById('bmiResult');
const reset = document.getElementById('bmiReset');

//validation bila data tidak diisi oleh user
document.getElementById('bmiResult').addEventListener('click', function(){
    let weight = document.querySelector('#weightInput').value;
        let height = document.querySelector('#heightInput').value;
        let age = document.querySelector('#ageInput').value;
        let gender = document.querySelector('input[name="gender"]:checked');

    if (weight == '' || height == '' || age == '' || gender == '') {
        alert ('Enter your correct data');
        return;
    }
})

//menghitung berat badan dan tinggi badan dengan menggunakan operator if else
function calculateBmi() {
     height = parseFloat(document.getElementById('heightInput').value);
        height /= 100;
     weight = parseFloat(document.getElementById('weightInput').value);
     bmi = weight / (height * height);

     if (bmi > 30.0) {
        document.getElementById('resultMessage').innerHTML = 'Kegemukan (Obesitas)';
    } else if (bmi >= 25.0 && bmi <= 29.0) {
        document.getElementById('resultMessage').innerHTML = 'Kelebihan Berat Badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById('resultMessage').innerHTML = 'Normal (ideal)';
    } else if (bmi <= 18.5) {
        document.getElementById('resultMessage').innerHTML = 'Kekurangan Berat Badan';
    } else {
        document.getElementById('resultMessage').innerHTML = 'Kekurangan Berat Badan';
    }
 // keterangan hasil dari penghitungan BMI dari user   
    document.getElementById('heading').innerHTML = 'Hasil Perhitungan BMI';
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(1);
 }
  
//melakukan penghapusan keseluruhan dari data user
let reload = () => {
    window.location.reload()
}