const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

document.getElementById('facturaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var nombre = document.getElementById('nombre').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;
    var producto = document.getElementById('producto').value;
    var precio = parseFloat(document.getElementById('precio').value);
  
    if (!isNaN(precio)) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'insertar_factura.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.onload = function() {
        if (xhr.status === 200) {
          document.getElementById('mensaje').innerText = xhr.responseText;
          document.getElementById('facturaForm').reset();
        } else {
          document.getElementById('mensaje').innerText = 'Error al registrar la factura';
        }
      };
      xhr.send('nombre=' + nombre + '&direccion=' + direccion + '&telefono=' + telefono + '&producto=' + producto + '&precio=' + precio);
    } else {
      document.getElementById('mensaje').innerText = 'Por favor, introduce un precio válido.';
    }
  });
  