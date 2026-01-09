document.addEventListener("DOMContentLoaded", function () {

  var corpo = document.body
  corpo.style.background = 'rgb(40, 200, 200)'

  var p1 = document.getElementsByTagName('p')[1]
  p1.style.color = 'blue'

  var d = document.querySelector('div#msg')
  d.style.background = 'green'

  // NÃO use document.write
  console.log(p1.innerHTML)

})

