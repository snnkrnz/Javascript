// Reduce metodu, dizi elemanları üzerinde işlem yapar ve sonucu tek bir değer şeklinde döndürür.
//
// Reduce Örnek
var total = [0, 1, 2, 3].reduce(function (sum, value) {
    return sum + value
  }, 1)
  
  console.log(total)
//Örnekte dizi elemanlarının toplamını tek bir sonuç olarak döndürür.
//Sonuç: 7 çünkü en sondaki 1 değeri dizinin başına eklenir ve toplanır