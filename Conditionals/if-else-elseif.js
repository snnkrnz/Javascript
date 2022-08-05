/*
if koşul ifadesi, koşul doğruysa kod bloğu içerisindeki komutları çalıştırır.
else koşul ifadesi, if koşul ifadesi yanlışsa kod bloğu içerisindeki komutları çalıştırır.
else if koşul ifadesi, if koşul ifadesi yanlışsa yeni bir koşul ifadesi yazmamızı ve yazılan koşul doğruysa kod bloğu içerisindeki komutları çalıştırır.

Örnekler:

    if(koşul) {
        // koşul doğru-true ise çalıştırılacak kod bloğu
    }
--- Aşağıdaki örnekte saat 18’den önce ise iyi günler mesajını uyarı mesajı olarak ekrana yazacaktır.
    
    var tarih = new Date();
    var saat = tarih.getHours();
    if(saat < 18) {
        alert("iyi günler");
    }

--- else kullanımı

    if(koşul) {
    // koşul doğru-true ise çalıştırılacak kod bloğu
    } else {
    // koşul yanlış-false ise çalıştırılacak kod bloğu
    }

--- Aşağıdaki Örnekte saat 18’den önce ise iyi günler değilse iyi akşamlar mesajını uyarı mesajı olarak ekrana yazacaktır.

    var tarih = new Date();
    var saat = tarih.getHours();
    if(saat < 18) {
        alert("iyi günler");
    } else {
        alert("iyi akşamlar");
    }

--- else if kullanımı

- if koşul ifadesindeki koşul yanlışsa ve yeni koşul ifadesi yazmak istenirse else if koşul ifadesi kullanılır.

    if(koşul) {
        // koşul doğru-true ise çalıştırılacak kod bloğu
    } else if(koşul2) {
        // koşul yalış-false ise ve koşul2 doğru-true ise çalıştırılacak kod bloğu
    } else {
        // koşul yanlış-false ise çalıştırılacak kod bloğu
    }

--- Diğer Bilgiler

0 false döndürür - 1 true döndürür.
0 false döndürdüğü için çalışmayacaktır fakat 1 her zaman çalışacaktır.

    if (0) { 
    ...
    }

→ → → → → → Üçlü operatör ‘?’ ← ← ← ← ← ←

Operatör "?" işareti ile ifade edilir.
Resmi tanımda “üçlü” kullanılmasının sebebi üç tane operanddan oluşmasından dolayıdır.
Aslında JavaScript dilinde 3 tane operandı olan başka bir operatör yoktur.

Yazımı şu şekildedir:

    let sonuc = koşul ? deger1 : deger2

Örnek:

    let girisIzni = (yas > 18) ? true : false;
    Parantezsiz de yazılabilir. Sonuç değişmez
    let girisIzni = yas > 18 ? true : false;

→ → Çoklu ‘?’ ← ←

Birden fazla "?" işareti kullanarak birden fazla koşula göre değer döndürme işlemini sağlayabilirsiniz.

    let yas = prompt('yaş?', 18);

    let mesaj = (yas < 3) ? 'Ne tatlı şeysin sen öyle!' :
    (yas < 18) ? 'Merhaba!' :
    (yas < 100) ? 'Merhaba efendim!' :
    'Ne garip bir yaşın var!';

    alert( mesaj );

→ → Geleneksel olmayan olmayan ‘?’ kontrolü ← ←

Bazı durumlarda '?' if in yerine kullanılabilir:

let firma = prompt('JavaScript hangi firma tarafından yaratılmıştır?', '');

(firma == 'Netscape') ?
   alert('Doğru!') : alert('Yanlış.');

Soru işaretinin bu amaç doğrultusunda kullanılması önerilmez.
Yazımı if yazımından daha kısa olsa bile daha az okunabilir durumdadır.
'?' işaretinin ideal kullanımı sadece o ya da bu sorusudur.
Daha uzun bir cümle için if kullanmalısınız.

*/