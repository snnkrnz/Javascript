/* sort yöntemi bir diziyi alfabetik olarak sıralar
sort yöntemine örnek ↓
*/ 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
/* Çıktı: Apple,Banana,Mango,Orange


 ÖNEMLİ → → Bu, string ifadeler için iyi çalışır ("Apple", "Banana" dan önce gelir). Ancak, sayılar sıralanırsa, "25", "100"den büyüktür, çünkü "2", "1"den büyüktür.
 Bu nedenle, sort() sayılar sıralanırken yanlış sonuç verecektir.
 Bunun çözümü ↓

  → → → → → → Karşılaştırma İşlevi (The Compare Function) ← ← ← ← ← ←

Karşılaştırma işlevinin amacı, alternatif bir sıralama düzeni tanımlamaktır.
Karşılaştırma işlevi, bağımsız değişkenlere bağlı olarak negatif, sıfır veya pozitif bir değer döndürür.

        function(a, b){return a - b}

İşlev iki değeri karşılaştırdığında, değerleri sort() karşılaştırma işlevine gönderir ve döndürülen (negatif, sıfır, pozitif) değere göre sıralar.
Sonuç negatif ise a, b'den önce sıralanır.
Sonuç pozitif ise b, a'dan önce sıralanır.
Sonuç 0 ise, iki değerin sıralama düzeninde herhangi bir değişiklik yapılmaz.

Örnek:

Karşılaştırma işlevi, dizideki tüm değerleri birbiriyle ve aynı anda iki değeri (a, b) şeklinde karşılaştırır.
40 ve 100'ü karşılaştırırken, sort() metodu karşılaştırma işlevini (40, 100) şeklinde çağırır.
İşlev 40 ve 100'ü (a - b) şeklinde hesaplarken, sonuç negatif (-60) olduğundan, sıralama işlevi 40'ı 100'den küçük bir değer olarak sıralar.
*/