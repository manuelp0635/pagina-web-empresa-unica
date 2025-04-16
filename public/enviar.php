<?php

// Dirección a la que se enviará el mensaje
$destino = "innoventdesarrollodesoftware@gmail.com";

// Obtener y sanitizar los datos del formulario
$nombre    = htmlspecialchars(trim($_POST['nombre'] ?? ''));
$email     = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$telefono  = htmlspecialchars(trim($_POST['telefono'] ?? ''));
$compania  = htmlspecialchars(trim($_POST['compañia'] ?? ''));
$asunto    = htmlspecialchars(trim($_POST['asunto'] ?? ''));
$mensaje   = htmlspecialchars(trim($_POST['mensaje'] ?? ''));

// Validación básica
if (empty($nombre) || empty($email) || empty($asunto) || empty($mensaje)) {
    header('Location: contactos.html?error=1'); // Campos obligatorios vacíos
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: contactos.html?error=1'); // Email inválido
    exit();
}

// Construir el cuerpo del mensaje
$mensajeCompleto = "Nombre: $nombre\n";
$mensajeCompleto .= "Email: $email\n";
$mensajeCompleto .= "Teléfono: $telefono\n";
$mensajeCompleto .= "Compañía: $compania\n";
$mensajeCompleto .= "Mensaje:\n$mensaje\n";

// Crear encabezados
$headers = "From: $nombre <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Enviar el correo
$enviado = mail($destino, $asunto, $mensajeCompleto, $headers);

// Redirigir con mensaje según resultado
if ($enviado) {
    header('Location: contactos.html?enviado=1');
} else {
    header('Location: contactos.html?error=1');
}
exit();
?>
