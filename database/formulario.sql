CREATE DATABASE formulario_contacto;

-- Seleccionar la base de datos
USE formulario_contacto;

-- Crear tabla de mensajes
CREATE TABLE mensajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(150),
    telefono VARCHAR(50),
    compañia VARCHAR(100),
    asunto VARCHAR(150),
    mensaje TEXT,
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

