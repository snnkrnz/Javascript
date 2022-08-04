var array = [1, 2, 3, 4, 5, 6]
array.push(7) // Dizinin sonuna 7 elemanını ekler.
array.shift() // Dizinin ilk elemanını çıkartır.
array.unshift(0) // Diziye bir eleman ekler. (En başa)
array.splice(2, 5) // Dizinin 2. elemanıyla 5. elemanı arasında kalan kısmını ayırır.
array.concat([8, 9, 10]) // Diziyi başka bir dizi ile birleştirir.
array.concat([11, 12, 13], [14, 15, 16]) // 3 diziyi birleştirir.
array.slice(0) // Dizinin verilen anahtarlı değerini diziden ayırır