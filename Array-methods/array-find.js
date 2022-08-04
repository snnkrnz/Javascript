// Find metodu, dizi içerisinde arama yapmayı sağlar.
var users = [
    {
      id: 1,
      name: 'alpcan'
    },
    {
      id: 2,
      name: 'hasan'
    },
    {
      id: 3,
      name: 'burak'
    }
  ]
  
  var user = users.find(function (user) {
    if (user.name === 'burak') {
      return user
    }
  })
  
  console.log(user)
  /*
    Örnek dizi içerisindeki objelerde arama yapmayı gerçekler.
    Sonuç: { id: 3, name: 'burak' }
  */