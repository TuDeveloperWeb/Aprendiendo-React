const arrNumero = [1,2,3,4,5];

let arrNumero2 = [...arrNumero,5];

console.log(arrNumero2);

const arrNumero3 = arrNumero2.map(number => number + 2);

console.log(arrNumero3);    