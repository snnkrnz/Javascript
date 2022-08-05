/*

JavaScript'in en büyük amacı, sayfamızda bir olay gerçekleştiğinde istediğimiz işlemleri gerçekleştirebilmemizi sağlamaktır.
Bunu sağlamak için sayfada gerçekleşebilecek olaylara birer isim verilmiştir.
İstenilen olay karşısında bir javascript fonksiyonunu çağırıp, ilgili işlemleri yaptırabiliriz.

Örneğin bir butona tıklandığında hesapla isimli javascript fonksiyonunu çalıştırmak istiyorsak buton elementinin içine onclick parametresi şu şekilde yazılır:

<input type="button" value="Hesapla" onclick="hesapla()" />

Önemli Eventlar ↓

→ → onClick
Elemana tıklanması olayıdır.

→ → onDblClick
Elemana çift tıklanması olayıdır.

→ → onLoad
Elemanın yüklenmesi olayıdır. Bu sayfanın kendisi olabileceği gibi bir resim ya da frame de olabilir. Sayfa yüklendiğinde direk çalışması istenen bir fonksiyon varsa bu olay ile çağrılabilir:

<body onload="girisFonksiyonu()" >

→ → onUnLoad
Tarayıcıda açık haldeki sayfanın terkedilmesi olayıdır. Bu pencerenin kapatılmasıyla olabileceği gibi bir linke tıklayarak başka bir sayfaya geçilmesi de olabilir.

→ → onFocus
Bir elemanın seçilerek odaklanılması olayıdır. Örneğin bir metin kutusuna tıklandığında kontrol o kutuya geçer ve kutu aktif olur. Bir sonraki konuda bununla ilgili bir örnek bulunmaktadır.

→ → onBlur
Aktif haldeki elemanın terk edilmesi olayıdır. Örneğin bir metin kutusu aktifken, başka bir yere tıklanarak kutudan çıkıldığında blur olayı meydana gelmiş olur.

→ → onMouseOver
Fare ile elemanın üzerine gelinmesi olayıdır.

→ → onMouseOut
Fare imlecinin elemanın üzerinden çekilmesi olayıdır.

→ → onMouseMove
Fare imlecinin, eleman üzerinde hareket ettirilmesi olayıdır.

→ → onMouseDown
Fare sol tuşunun eleman üzerindeyken basılması olayıdır. Tuş aşağıya indiği anda ilgili fonksiyon çalışır.

→ → onMouseUp
Fare sol tuşunun eleman üzerindeyken basılıp bırakılması olayıdır. Fare tuşu aşağıdayken çalışmaz, tuş bırakıldığında çalışır.

→ → onKeyDown
Klavyeden bir tuşa basılması olayıdır. Basılan tuşun ASCII kodu Event.keyCode özelliği ile öğrenilebilir. String.fromCharCode metodu ise okunan karakter kodunu tuşun ismine çevirebilir.

→ → onSelect
Bir metin kutusu içindeki metnin seçilmesi olayıdır.

→ → onResize
Tarayıcı penceresinin boyutunun değiştirilmesi olayıdır.

*/