<?php
$conexion = mysqli_connect("localhost","root", "","login_register_db");

if($conexion){
    echo 'conectado exitosamente a la base de Datos';
}else{
    echo 'No se ha podido conectar a la Base de Datos';
}

?>