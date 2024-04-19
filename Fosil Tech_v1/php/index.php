<?php

$servidor="localhost";
$usuario= "root";
$clave= "";
$baseDedato="datos";

$enlace = mysqli_connect($servidor, $usuario, $clave, $baseDedato);
?>

 <html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <form action="g" name="ejemplo" method="post">
      <input type="text" name="nombre" aria-placeholder="nombre">
      <input type="email" name="correo" aria-placeholder="correo">
      <input type="text" name="telefono" aria-placeholder="telefono">  

      <input type="submit" name="registro">
      <input type="reset">
    </form>
  </body>
 </html>





<?php

if (isset($_POST['registro'])) {
  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $telefono = $_POST['telefono'];
 
  
  }
  
  $insertarDatos = "INSERT INTO factura VALUES ('$nombre', '$correo', '$telefono', '')";
  
$ejecutarInsertar = mysqli_query($enlace, $insertarDatos);
    
?>