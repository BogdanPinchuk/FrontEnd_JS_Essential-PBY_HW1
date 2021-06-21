// 1) Объявите две переменные: login и name.
let login, name; // помилка: deprecated - застарілий
// перевірка - використовуючи шаблони/інтераоляцію рядків
console.log(`login: ${login}, name: ${name};`);

// 2) Переменной name, в качестве значения присвойте свое имя
login =  "Bohdan";
// проверка
console.log(`login: ${login}, name: ${name};`);

// 3) Скопируйте значение из переменной name в login
name = login;
// проверка
console.log(`login: ${login}, name: ${name};`);