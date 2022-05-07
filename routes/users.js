const express = require("express");

const router = express.Router(); //declarando un router

router.get("/users", (req,res) => {
    res.json({
        ruta: "users"
    })
});

router.get("/login", (req, res) => {
    res.json({
        ruta: "login"
    })
});

router.get("/registration", (req, res) => {
    res.json({
        ruta: "registration"
    })
});

module.exports = router