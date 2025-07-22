const express = require('express');
const session = require('express-session');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Importar los archivos de rutas (sin .default)
const getRoutes = require('./routes/getRoutes');
const postRoutes = require('./routes/postRoutes');
const putRoutes = require('./routes/putRoutes');
const deleteRoutes = require('./routes/deleteRoutes');

// Configuración de conexión a la base de datos
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'concesionarialpp'
};

const connection = mysql.createConnection(dbConfig);

// Conectar a la base de datos
connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL!');
});

// Exportar la conexión para usar en otros módulos
module.exports.connection = connection;

// Middleware para manejar JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar el motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, 'public')));

// Configurar sesión
app.use(
  session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true
  })
);

// Middleware para mensajes flash en vistas
app.use((req, res, next) => {
  res.locals.successMessage = req.session.successMessage;
  res.locals.errorMessage = req.session.errorMessage;
  delete req.session.successMessage;
  delete req.session.errorMessage;
  next();
});

// Usar rutas
app.use(getRoutes);
app.use(postRoutes);
app.use(putRoutes);
app.use(deleteRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
