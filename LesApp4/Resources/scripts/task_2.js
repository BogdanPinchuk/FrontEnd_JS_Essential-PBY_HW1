// 1) Переменная для хранения даты создания файла.
let datetimeCreateFile = Date();
// перевірка
console.log(`Date time of created file: ${datetimeCreateFile};`);

// 2) Переменная для хранения имени файла.
// help info: https://overcoder.net/q/29041/как-получить-имя-файла-по-полному-пути-используя-javascript
// let fileName = window.location.pathname; // full name
let fileName = window.location.pathname.replace(/^.*[\\\/]/, '');
console.log(`Name of file: ${fileName};`);

// 3) Переменная для хранения количества ошибок.
let countErrors = Math.round(Math.random() * 100);
console.log(`Count of errors: ${countErrors};`);
