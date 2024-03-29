const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const puerto = process.env.PORT || 3000;
// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost/tu_app_db', { useNewUrlParser: true, useUnifiedTopology: true });
// Definir el modelo de usuario de MongoDB (usando Mongoose)
const Usuario = mongoose.model('Usuario', {
    nombreCompleto: String,
    correoTelefono: String,
    edad: Number,
    localizacion: String
});

app.use(bodyParser.json());

// Ruta para registrar un usuario
app.post('/registro', (req, res) => {
    const nuevoUsuario = new Usuario(req.body);

    nuevoUsuario.save((err, usuario) => {
        if (err) {
            res.status(500).send('Error al registrar usuario');
        } else {
            res.status(200).send('Usuario registrado exitosamente');
        }
    });
});

// Ruta para iniciar sesión (a implementar)

app.listen(puerto, () => {
    console.log(`Servidor en ejecución en el puerto ${puerto}`);
});
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Ruta para iniciar sesión
app.post('/iniciar-sesion', (req, res) => {
    const { usuario, contrasena } = req.body;
    //  verificar las credenciales en tu base de datos
    // autenticación exitosa 
    if (usuario === 'usuarioEjemplo' && contrasena === 'contrasenaEjemplo') {
        // Generar una cookie de sesión (esto es muy simplificado)
        res.cookie('sesion', 'usuarioEjemplo', { httpOnly: true });
        res.status(200).send('Inicio de sesión exitoso');
    } else {
        res.status(401).send('Credenciales incorrectas');
    }
});
// ... (otros middleware y rutas)
app.listen(puerto, () => {
    console.log(`Servidor en ejecución en el puerto ${puerto}`);
});