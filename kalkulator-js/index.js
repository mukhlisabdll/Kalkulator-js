const readline = require("readline-sync");

const angkaPertama = parseFloat(readline.question("Masukan angka pertama: "));
const operator = readline.question("Masukan operator (+, -, *, /, %): ");
const angkaKedua = parseFloat(readline.question("Masukan angka kedua: "));

const hasil = angkaPertama + operator + angkaKedua;

if (isNaN(angkaPertama) || isNaN(angkaKedua)) {
  // maka tampilkan error
  return console.log("Inputan tidak sesuai !!!");
} else {
  // lanjutkan eksekusi kode
  const hasil = execute(angkaPertama, angkaKedua, operator);
  console.log(`Hasil adalah ${hasil}`);
}

function execute(angkaPertama, angkaKedua, operator) {
  switch (operator) {
    case "+":
      return angkaPertama + angkaKedua;
    case "-":
      return angkaPertama - angkaKedua;
    case "*":
      return angkaPertama * angkaKedua;
    case "/":
      // validasi angka kedua
      if (angkaKedua === 0) {
        return console.log("Error: Tidak bisa dibagi dengan nol");
      }

      return angkaPertama / angkaKedua;
    case "%":
      return angkaPertama % angkaKedua;
    default:
      console.log("Operator tidak valid");
  }
}
