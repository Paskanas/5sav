console.log('-----Uzduotis1------');
//Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
const num1 = 10;
const num2 = 9;
if (num1 > num2) {
  console.log('Pirmas skaicius didesnis');
} else if (num1 < num2) {
  console.log('Antras skaicius didesnis');
} else {
  console.log('Skaiciai lygus');
}

console.log('-----Uzduotis2------');
//Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log('-----Uzduotis3------');
//Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

console.log('-----Uzduotis4------');
// Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
for (let i = 0; i < 5; i++) {
  console.log(Math.ceil(Math.random() * 10));
}

console.log('-----Uzduotis5------');
// Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
let randomNum;
while (randomNum !== 5) {
  randomNum = Math.ceil(Math.random() * 10);
  console.log(randomNum);
}

console.log('-----Uzduotis6------');
// Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
const arrayLength = 25;
const maxNumberValue = 30;
const minNumberValue = 10;
const myArray = [];
let randomNumber = 0;
let arrMaxValue = 0;

for (var i = 0; i < arrayLength; i++) {
  randomNumber = Math.ceil(Math.random() * 100);
  while (randomNumber < minNumberValue || randomNumber > maxNumberValue) {
    randomNumber = Math.ceil(Math.random() * 100);
  }

  if (randomNumber >= minNumberValue && randomNumber <= maxNumberValue) {
    myArray.push(randomNumber);
  }
}
console.log('My array:', myArray);

for (let i = 0; i < arrayLength; i++) {
  if (myArray[i] > arrMaxValue) {
    arrMaxValue = myArray[i];
  }
}
console.log('Max array value:', arrMaxValue);

console.log('-----Uzduotis7------');
// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
const letterA = 1;
const letterB = 2;
const letterC = 3;
const letterD = 4;
let letterACount = 0;
let letterBCount = 0;
let letterCCount = 0;
let letterDCount = 0;
const myArray2 = [];
let randNumb = 0;
for (let i = 0; i < 10; i++) {
  randNumb = Math.ceil(Math.random() * 10);
  while (randNumb < letterA || randNumb > letterD) {
    randNumb = Math.ceil(Math.random() * 10);
  }
  randNumb === letterA
    ? letterACount++
    : randNumb === letterB
    ? letterBCount++
    : randNumb === letterC
    ? letterCCount++
    : letterDCount++;
  if (
    randNumb === letterA ||
    randNumb === letterB ||
    randNumb === letterC ||
    randNumb === letterD
  ) {
    myArray2.push(String.fromCharCode(64 + randNumb));
  }
}
console.log('Masyvas:', myArray2);
console.log(
  `Raidziu ${String.fromCharCode(64 + letterA)} kiekis masyve: ${letterACount}`
);
console.log(
  `Raidziu ${String.fromCharCode(64 + letterB)} kiekis masyve: ${letterBCount}`
);
console.log(
  `Raidziu ${String.fromCharCode(64 + letterC)} kiekis masyve: ${letterCCount}`
);
console.log(
  `Raidziu ${String.fromCharCode(64 + letterD)} kiekis masyve: ${letterDCount}`
);
console.log('-----Uzduotis8------');
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji.
// Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą.
// Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
const checkIsGoodNumber = (num) => {
  if (typeof num === 'number' && isFinite(num)) {
    return true;
  } else {
    return false;
  }
};

const checkIsGoodArray = (arr) => {
  if (Array.isArray(arr)) {
    return true;
  } else {
    return false;
  }
};

const lygineSuma = (a, b) => {
  let sum = 0;
  if (checkIsGoodNumber(a) && checkIsGoodNumber(b)) {
    sum = a + b;
  } else if (checkIsGoodArray(a) && checkIsGoodArray(b)) {
    sum = a.length + b.length;
  } else {
    return 'Pateikti parametrai yra netinkamo formato';
  }

  if (sum % 2 === 0) {
    return 'Suma lygine';
  } else {
    return 'Suma nelygine';
  }
};

console.log(lygineSuma(10, 11));
console.log(lygineSuma([10, 15, 15], 11));
console.log(lygineSuma([10, 15, 15], [11]));
console.log(lygineSuma([10, 15, 15], [11, 1]));
console.log(lygineSuma([10, 15, 15], 'a'));
console.log(lygineSuma('a', [10, 15, 15]));
console.log(lygineSuma(NaN, 2));
console.log(lygineSuma(Infinity, 2));
console.log(lygineSuma(2, Infinity));
console.log(lygineSuma(2, 1));
console.log('-----Uzduotis9------');
// 9. Parašyti funkciją pirminisSkaicius.
// Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius.
// Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
//   skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
const pirminisSkaicius = (a) => {
  let dalikliuKiekis = 0;
  if (typeof a === 'number' && isFinite(a)) {
    for (let i = 0; i < a; i++) {
      a % i === 0 ? dalikliuKiekis++ : null;
    }
  } else {
    return 'Pateikras parametras nera skaicius';
  }
  console.log(dalikliuKiekis);
  if (dalikliuKiekis !== 2) {
    return 'Skacius nera pirminis';
  } else {
    return 'Skacius yra pirminis';
  }
};
console.log(pirminisSkaicius('a'));
console.log(pirminisSkaicius([1]));
console.log(pirminisSkaicius(5));
console.log(pirminisSkaicius(1));
console.log(pirminisSkaicius(4));
console.log(pirminisSkaicius(123));
console.log('-----Uzduotis10------');
// 10. Parašyti funkciją telefonoNumeris.
// Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10.
// Funkcija turi grąžinti telefono numerį tokiu formatu -
// "(XXX) XXX-XXXX". (10 taškų)
function telefonoNumeris(arr) {
  let concatString = '';
  if (arr.length !== 10) {
    concatString = 'Įvestas neteisingas numeris';
  } else {
    concatString = '(';
    for (i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number' || !isFinite(arr[i])) {
        return 'Ne visi masyvo parametrai yra skaiciai';
      }
      concatString += arr[i];
      if (i === 2) {
        concatString += ') ';
      } else if (i === 5) {
        concatString += '-';
      }
    }
  }
  return concatString;
}
console.log(telefonoNumeris([3, 7, 0, 6, 7, 3, 3, 5, 2, 0]));
console.log(telefonoNumeris([3, 7, 0, 6, 7, 3, 3, NaN, 2, 0]));
console.log(telefonoNumeris([3, 7, 0, 6, 7, 3, 3, 'NaN', 2, 0]));
console.log(telefonoNumeris([3, 7, 0, 6, 7, 3, 3, 'NaN', 2, 0]));
