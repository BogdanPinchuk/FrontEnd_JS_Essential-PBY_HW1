console.log("Вычисление объема цилиндра.");
//  V=π * r в квадрате * h
let V;
const Pi = 3.1415926535;
let r = 10,
    h = 20;

// message
console.log("Дано:");
console.log(`Радіус - r = ${r}, висота - h = ${h};`);

V = Pi * r * r * h;
// console.log(V);
console.log(`Об'єм циліндра: V = Pi * r ^ 2 * h = ${V.toFixed(3)};`);
