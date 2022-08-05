/*

Program içerisinde bazı kod parçaları defalarca kullanılacaksa, bu satırları her seferinde tekrar yazmak yerine bir fonksiyon içerisine yazabilir ve fonksiyonun adı ile istedimiz yerden çağırabiliriz. 

Ayrıca JavaScript gibi olay yönlendirmeli dillerde hangi olay gerçekleştiğinde hangi fonksiyonun çalışacağı belirlenerek işlemler gerçekleştirilir. 

function fonsiyonAdi()
{
    Yapılacak işlemler buraya yazılır.
}

Örnek:

function mesajGoster() {
  alert( 'Merhaba millet!' );
}

→ → → → → → Ok Fonksiyonları - Arrow Functions ← ← ← ← ← ←

Fonksiyonları yaratmak için daha kısa bir yöntem daha vardır, bu Fonksiyon İfadesinden daha iyi denilebilir.
Bunlara “Ok Fonksiyonları” denir. Çünkü “ok” gibi görünürler.

let func = (arg1, arg2, ...argN) => ifade

Yukarıda yazılan kod func adında arg1..argN'e kadar argüman alan ve sonunda ifadeyi çalıştıran bir fonksiyon bulunmaktadır.

Örneğin:

let topla = (a, b) => a + b;

Yukarıdaki ok fonksiyonu aşağıdaki fonksiyon ifadesinin daha özlü yazılmış halidir.

let topla = function(a, b) {
  return a + b;
};

alert( topla(1, 2) ); // 3

Ok Fonksiyonları Fonksiyon ifadeleri ile aynı şekilde kullanılabilirler.
Örneğin aşağıda merhaba() fonksiyonunun Ok Fonksiyonu şekliyle görebilirsiniz.

let yas = prompt("Kaç Yaşındasın?", 18);

  let merhaba = (yas < 18) ?
    () => alert('Merhaba') :
    () => alert("Merhabalar!");

  merhaba();

  Özet:

  Ok Fonksiyonları tek satır için kullanışlıdır. İki türlüsü vardır:

Süslü parantez olmadan: Fonksiyon sağ taraftaki ifadeyi çalıştırır ve sonucu döndürür. Tek satırda biten işlemler için kullanılmalıdır.
Süslü parantez ile (...args) => { gövde } – süslü parantez bizim birden fazla satır yazmamızı sağlar. Fakat gövde içerisinde return kullanılması gerekmektedir.
*/