<?php

    include 'conexion_be.php';

    $nombre_completo = $_POST['nombre_completo'];
    $correo = $_POST['correo'];
    $usuario = $_POST['usuario'];
    $contraseña = $_POST['contraseña'];

    $query = "INSERT INTO usuarios(nombre_completo,correo, usuario, contraseña)
            VALUES('$nombre_completo','$correo', '$usuario','$contraseña')";

    //Verificar que el correo no se repita en la base de datos
    $verificar_correo = mysqli_query($conexion,"SELECT * FROM usuarios WHERE correo = '$correo'");
    if (mysqli_num_rows($verificar_correo)>0){
        echo '
            <script> 
                alert("Este correo ya está resgistrado, intenta con otro diferente");
                window.location = "../index.php";
            </script>
        ';
        exit(); //termina el codigo 
    }

        //Verificar que el nombre de usuario, no se repita en la base de datos
        $verificar_usuario = mysqli_query($conexion,"SELECT * FROM usuarios WHERE usuario = '$usuario'");
        if (mysqli_num_rows($verificar_usuario)>0){
            echo '
                <script> 
                    alert("Este usurio ya está resgistrado, intenta con otro diferente");
                    window.location = "../index.php";
                </script>
            ';
            exit(); //termina el codigo 
        }

    $ejecutar = mysqli_query($conexion,$query);

    if($ejecutar){
        echo '
            <script> 
                alert("Usuario almacenado exitosamente");
                window.location = "../index.php";


            </script>
        
        ';
    }else {
        echo '
        <script> 
            alert("Inténtelo de nuevo, usuario no almacenado");
            window.location = "../index.php";


        </script>
    
    ';
    }

    mysqli_close($conexion);



        

?>