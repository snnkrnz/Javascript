// Filter metodu, dizinin elemanlarını filtrelemeyi sağlar. Sonuç yeni bir dizi olarak dönecektir. Ana dizinin elemanlarını değiştirmez.
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var result = array.filter(function (piece) {
  if (piece % 2) {
    return piece
  }
})

console.log(result)
/*
  Dizideki tek değerleri filtrelemeye yarar.
  Sonuç: [ 1, 3, 5, 7, 9 ]
*/