/*
for döngüsü en fazla kullanılan döngüdür.
Aşağıdaki döngü alert(i) yi i 0 dan 3 olana kadar çalıştırır.(3 dahil değil)

    for (let i = 0; i < 3; i++) {
    alert(i);
    }

Yukarıdaki kodda tam olarak ne oluyor peki:

    // for (let i = 0; i < 3; i++) alert(i)

    // Çalışmaya başla
    let i = 0
    // if koşul → gövdeyi çalıştır ve adımı çalıştır
    if (i < 3) { alert(i); i++ }
    // if koşul →  gövdeyi çalıştır ve adımı çalıştır
    if (i < 3) { alert(i); i++ }
    // if koşul →  gövdeyi çalıştır ve adımı çalıştır
    if (i < 3) { alert(i); i++ }
    // ...bitir, çünkü şimdi i=3


Not: for döngüsü yazarken noktalı virgüller ; yazılmalıdır, aksi halde yazım hatası verir.

→ → → → Döngüyü kırma ← ← ← ←

Normalde döngüler koşul yanlış olduğunda biter.

Fakat bazı durumlarda bu döngü kırılabilir ( break ).

Örneğin, kullanıcıdan bir dizi sayı girmesini istediniz eğer boş bir değer girerse döngüyü kırabilirsiniz.

    let toplam = 0;

    while (true) {

    let deger = +prompt("Bir sayı giriniz", '');

    if (!deger) break; // (*)

    toplam += deger;

    }
    alert( 'Toplam: ' + toplam );

break talimatı (*) satırında görüldüğü üzere. Eğer kullanıcı boş değer girerse doğrudan döngü durur ve döngüden sonraki ilk satıra atlar. Yani alert çalışır.

→ → → → Bir sonraki tekerrüre geçme ← ← ← ←

continue, break in daha hafif versiyonudur. Döngüyü tamamen kırmaz da zorla bir sonraki tekerrüre geçer(tabi koşul sağlanıyorsa)
O anda tekrar eden değer ile işimiz bitti ve bir sonraki tekrar geçmek istendiğinde continue kullanılır.

    for (let i = 0; i < 10; i++) {

    // Eğer 2'ye bölünebiliyorsa bir sonraki adıma atlar.
    if (i % 2 == 0) continue;

    alert(i); // ekranda 1, 3, 5, 7, 9 değerleri gösterilir.
    }

i nin çift değerleri için döngü gövdesi durdurulur, sonraki adıma geçilir.
Bundan dolayı alert sadece tek değerler için çalışır.

*/