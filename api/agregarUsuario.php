<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    require "conexion.php";

    $json = file_get_contents("php://input");
    
    $objEmpleado = json_decode($json);

    if(
        empty($objEmpleado->usuario) ||
        empty($objEmpleado->contrasena) ||
        empty($objEmpleado->email)

    ) {
        $jsonRespuesta = array('msg' => 'ERROR');
        echo json_encode($jsonRespuesta);
    } else {
        $sql = "INSERT INTO usuarios(usuario, contrasena, email) VALUES('$objEmpleado->usuario', '$objEmpleado->contrasena', '$objEmpleado->email')";
        $query = $mysqli->query($sql);
    
        $jsonRespuesta = array('msg' => 'OK');
        echo json_encode($jsonRespuesta);
    }

