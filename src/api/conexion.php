<?php

// DATOS DE CONEXION A LA BASE DE DATOS
function conexion() {
  $conexion = mysqli_connect("127.0.0.1", "root", "", "gestorsalones") or die('No se pudo conectar: ' . mysql_error());
  return $conexion;
}

?>