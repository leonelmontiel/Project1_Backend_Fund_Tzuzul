const path = require("path"); // path: nos permite administrar rutas de archivos

//usando modulos externos
const express = require("express");
const port = 4000;

const app = express();

app.get("/", (req, res) => {
    console.log(__dirname);
    return res.sendFile(path.join(__dirname, "static", "index.html"));
})

app.listen(port, () => {
    console.log(`listen en: http://localhost:${port}`);
})