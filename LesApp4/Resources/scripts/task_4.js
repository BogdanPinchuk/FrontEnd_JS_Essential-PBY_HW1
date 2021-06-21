let productPrice1 = 101.5, // цена 1го продукта
    productPrice2 = 50.25, // цена 2го продукта
    productPrice3 = 10.11; // цена 3го продукта

let productQuantity1 = 5,  // количество единиц 1го продукат на складе
    productQuantity2 = 9,  // количество единиц 2го продукат на складе
    productQuantity3 = 15; // количество единиц 3го продукат на складе

// Выведите на экран:
// 1) Среднюю цену на продукт
// 2) Общую стоимость всех продуктов, которые есть на складе

// сумарна ціна
let costOfProducts = productPrice1 * productQuantity1 +
    productPrice2 * productQuantity2 +
    productPrice3 * productQuantity3;

// сумарна кількість продуктів
let countOfProducts = productQuantity1 + productQuantity2 + productQuantity3;

// середняя ціна
let averageCost = costOfProducts / countOfProducts;

// message
console.log(`Средняя цена на продукт: ${averageCost.toFixed(3)};`);
console.log(`Общая стоимость всех продуктов,\nкоторые есть на складе: ${costOfProducts.toFixed(3)};`);
