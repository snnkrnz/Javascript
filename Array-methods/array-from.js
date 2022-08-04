// From metodu, belirli uzunlukta dizi oluşturmayı sağlar.
var array = Array.from({ length: 10 }, function (value, index) {
    return index * 2
  })
  console.log(array)
  /*
    Boyutu 10 olan ve her bir değeri anahtar değerinin 2 katı olacak dizi üretir.
    Sonuç: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
  */