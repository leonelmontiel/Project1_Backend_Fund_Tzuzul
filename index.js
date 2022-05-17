//usando modulos nativos
const path = require("path"); // path: nos permite administrar rutas de archivos

//usando modulos externos
const express = require("express");
const port = 4000;

//importando router
const users = require("./routes/users");
// inicializando express
const app = express();


//sección para los middleware (van antes que la declaración del uso de routers)
app.use(express.static(path.join(__dirname, "static")));//Middleware para archivos estáticos

//sección de código para los routers
app.use(users); //usando el router que ya había creado

app.get("/", (req, res) => {
    
    return res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(port, () => {
    console.log(`listen en: http://localhost:${port}`);
});

/* 1- pensar primero las rutas de la aplicación (usuarios: inicio de sesión, home, etc)
   2- */