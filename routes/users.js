const express = require("express");
const path = require("path");
const view = require("../helpers/views")

const router = express.Router(); //declarando un router

router.get("/users", (req,res) => {
    res.json({
        ruta: "users"
    })
});

router.get("/login", (req, res) => {
    return view("login.html",res)
});

router.get("/registration", (req, res) => {
    return view("registration.html",res)
});

module.exports = router