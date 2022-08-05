/* While
koşul doğru iken(while), döngü gövdesinde bulunan kod çalıştırılır.

Örneğin, aşağıdaki kod i < 3 iken çalışır.

    let i = 0;
    while (i < 3) { // önce 0, sonra 1, sonra 2
    alert( i );
    i++;
    }

Döngünün gövdesinde bulunan kodun her çalışmasına tekerrür(iteration) denir. 
Yukarıdaki örnekte gövde 3 defa tekerrür etmiştir.

→ → do while ← ←

do..while döngüsü kullanarak koşul kontrolünü sonda yapmak mümkündür.
Döngü önce gövdeyi çalıştırır, sonra koşul kontrolü yapar ve eğer doğruysa tekrar döngü gövdesini çalıştırır.

    let i = 0;
    do {
    alert( i );
    i++;
    } while (i < 3);

*/