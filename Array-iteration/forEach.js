/*

forEach(), her dizi öğesi için bir işlevi çağırır.

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "<br>";
}

----

filter() , bir testi geçen dizi öğeleriyle yeni bir dizi oluşturur.

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

Bu örnek, değeri 18'den büyük olan öğelerden yeni bir dizi oluşturur:

*/