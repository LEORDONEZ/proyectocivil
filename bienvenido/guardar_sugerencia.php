<?php
// Conectar a la base de datos
$servername = "localhost"; 
$username = "root";         
$password = "";             
$dbname = "sugerencias_db"; 

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$codigo = $_POST['codigo'];
$ciudad = $_POST['ciudad'];
$carrera = $_POST['carrera'];
$sugerencia = $_POST['sugerencia'];

// Evitar inyecciones SQL
$nombre = $conn->real_escape_string($nombre);
$codigo = $conn->real_escape_string($codigo);
$ciudad = $conn->real_escape_string($ciudad);
$carrera = $conn->real_escape_string($carrera);
$sugerencia = $conn->real_escape_string($sugerencia);

// Insertar datos en la tabla
$sql = "INSERT INTO sugerencias (nombre, codigo, ciudad, carrera, sugerencia) 
        VALUES ('$nombre', '$codigo', '$ciudad', '$carrera', '$sugerencia')";

// Ejecutar la consulta
if ($conn->query($sql) === TRUE) {
    echo "Sugerencia guardada exitosamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
