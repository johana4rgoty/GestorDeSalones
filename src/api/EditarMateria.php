<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "UPDATE usuarios
    SET matCodigo='$params->matCodigo',
      matNombre='$params->matNombre',
      matEstudiantes=$params->matEstudiantes, 
      matIntensidadHoraria=$params->matIntensidadHoraria, 
      matPrioridadHorario='$params->matPrioridadHorario',
      matRestriccionSalon='$params->matRestriccionSalon',
      matNombreProfesor='$params->matNombreProfesor',
      matContactoProfesor='$params->matContactoProfesor',                  
      coordinador_cooId=$params->coordinador_cooId
    WHERE matId=$params->matId");
    
  
  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'LA MATERIA SE ACTUALIZO EXITOSAMENTE';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>