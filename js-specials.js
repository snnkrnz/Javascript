/*
→ → → Etkileşim

prompt(soru[, varsayılan])
soru sor ve kullanıcının girdiği değeri döndür. Eğer kullanıcı “iptal” tuşuna bakarsa null döndür.
confirm(soru)
soru sor ve “Tamam” mı yoksa “İptal” mi diye seçenekler sun. Sonuçta seçilene göre true/false döndür.
alert(mesaj)
Mesajın çıktısını ekrana uyarı olarak ver.
Tüm bu fonksiyonlar modal dır. Modallar kullanıcının etkileşimi olana kadar kodu durdururlar. Yani kullanıcıdan cevabı beklerler.

→ → → Operatörler

→ Aritmetiksel

Normal işlemler: * + - / mod alma % ve ** üs alma için bu operatörler kullanılır.
Eğer operandlardan birisi karakter ise diğer taraf sayı bile olsa + kullanıldığında bu iki değer de karakter olarak varsayılır
    alert( '1' + 2 ); // '12', karakter dizisi

→ Üçlü operatör
Üç tane paremetreden oluşur: koşul ? sonucA : sonucB. Eğer koşul doğru ise sonucA döndürür, yanlış ise sonucB

→ Mantıksal operatörler
Mantıksal VE &&, VEYA || operatörleri ile bu işlemler yapılabilir.

→ → → Döngüler

    // 1
    while (koşul) {
    ...
    }

    // 2
    do {
    ...
    } while (koşul);

    // 3
    for(let i = 0; i < 10; i++) {
    ...
    }

for(let...) içinde tanımlanan değişkenler sadece döngü içerisinden erişilebilirdir.
Fakat leti pas geçip var olan değişkeni kullanmak da mümkündür.
Direktifler break/continue döngüden çıkılmasını sağlar. 
label kullanarak iç içe döngüde break/continue nereye dallanacağını belirleyebilirsiniz.

→ → → “switch” yapısı

“switch” yapısı çoklu if kontrolleri yerine kullanılabilir.
“switch” karşılaştırma için, sıkı karşılaştırmayı === kullanır.

    let age = prompt('Kaç yaşındasın?', 18);

    switch (age) {
    case 18:
        alert("Çalışmaz"); // `prompt` ile tutulan değer sayı değil karakterdir!!!

    case "18":
        alert("Çalışır!");
        break;

    default:
        alert("Değer yukarıda bulunan koşullara uymamakta");
    }

→ → → Fonksiyonlar

Fonksiyon Tanımlama: Fonksiyon ana kod akışında.

    function toplam(a, b) {
    let sonuc = a + b;

    return sonuc;
    }
Fonksiyon ifadesi: Fonksiyon ifadenin içerisinde

    let toplam = function(a, b) {
    let sonuc = a + b;

    return sonuc;
    }
Fonksiyon ifadesi bir isme sahip olabilir fakat bu isim sadece bu fonksiyon içinde kullanılabilir. Örneğin = toplam = function isim(a,b) gibi.

*/