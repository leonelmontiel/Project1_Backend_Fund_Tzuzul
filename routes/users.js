const express = require("express");
const database = require("../libs/database");
const view = require("../helpers/views")
const User = require("../models/user");

const router = express.Router(); //declarando un router

router.get("/users", async (req,res) => {
    try {
        const data = await database.query("SELECT * FROM users")
        return res.json(data);
    } catch(error) {
        return res.json({
            error: true,
            message: "An error ocurred"
        })
    }
})

router.get("/registration", async (req, res) => {
    return view("registration.html", res)
})

router.post("/registration", async (req, res) => {

    console.log(req.body);
    const user = new User(req.body)
    console.log(user);
    const validation = user.validate()

    if (validation.validated) {
        return res.json(await user.save())
    }
    return res.json(validation)  
    
})

router.get("/login", async function(req, res) {
    return view("login.html", res)
})

router.post("/login", async function(req, res) {
    const user = new User(req.body)
    const result = await user.login()

    return res.json(result)
})

module.exports = router