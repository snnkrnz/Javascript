// Map metodu, çağırılan dizide elemanların üzerinde işlem yapar ve yeni bir dizi olarak döndürür.
// MAP Örnek 1
const array1 = [1, 4, 9, 16];
// array oluşturma
const map1 = array1.map(x => x * 2);
// map'e fonksiyon iletme
console.log(map1);
// çıktı: Array [2, 8, 18, 32]
//
//
// MAP Örnek 2
const sayilar = [2, 3, 4, 5, 10]
const yeniArray = sayilar.map(deger => {
    return deger * 2
})
//
//
// MAP Örnek 3
const maaslar = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];
const yeniMaaslar = maaslar.map((e)=>{
    if(e > 3000)
        return e * 1.15;
    else
        return e * 1.25;
});
console.log( yeniMaaslar );
//Çıktı: [1210, 13650, 2750, 4725, 1650.0000000000002, 26250, 2200]
//
//
// MAP Örnek 4
const array = ['javascript', 'map', 'metodu', 'örnegi']
const result = array.map(function (yeni) {
  return yeni.toUpperCase()
});
console.log(result)
///Dizideki metinleri büyük harfe çeviren betik. 
// Sonuç: [ 'JAVASCRIPT', 'MAP', 'METODU', 'ÖRNEGI' ]
//
//
// MAP Örnek 5
const icecek = ["Soda","Kola","Ayran","Limonata"];
const sogukIcecek = icecek.map(function(el) {
      return 'Soğuk '+el;
    });
    console.log(sogukIcecek);
//Çıktı: ["Soğuk Soda", "Soğuk Kola", "Soğuk Ayran", "Soğuk Limonata"]
//
//
// MAP Örnek 6
let uzunluklar = ["Bilbo", "Gandalf", "Nazgul"].map(eleman => eleman.length)
alert(uzunluklar); 
//Çıktı: 5,7,6