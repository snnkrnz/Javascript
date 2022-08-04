// Some metodu, dizideki elemanlardan en az birisinin koşula uyması durumunda mantıksal bir dönüt yapar.
var array = [1, 2, 3, 4, 5]
var result = array.some(function (piece) {
  if (piece > 6) {
    return true
  }
})

console.log(result)
/*
  Örnekte en az bir değer 6'dan büyük mü sorusunu yanıtlar.
  Sonuç: false
*/