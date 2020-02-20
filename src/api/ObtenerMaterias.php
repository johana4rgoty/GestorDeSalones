<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  //require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  //$conexion = conexion(); // CREA LA CONEXION

  $conexion = mysqli_connect("127.0.0.1", "root", "", "gestorsalones") or die('No se pudo conectar: ' . mysql_error());

  // REALIZA LA QUERY A LA DB
  $registros = mysqli_query($conexion, "SELECT * FROM materia") or die('Consulta fallida: ' . mysql_error());
  
  // RECORRE EL RESULTADO Y LO GUARDA EN UN ARRAY
  while ($resultado = mysqli_fetch_array($registros))  
  {
    $datos[] = $resultado;
  }
  
  $json = json_encode($datos); // GENERA EL JSON CON LOS DATOS OBTENIDOS
  
  echo $json; // MUESTRA EL JSON GENERADO
  
  header('Content-Type: application/json');
?>