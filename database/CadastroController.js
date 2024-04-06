const express = require("express");
const router = express.Router();
const users = require("./Users");
const bcrypt = require('bcryptjs');

router.get("/",(req,res) =>{
    res.render("cadastro");
})

router.post("/users/create",(req,res) =>{
    var email = req.body.email;
    var password = req.body.password;

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    users.create({
        Email: email,
        Password: hash
    }).then(() => {
        res.redirect('/')
    }).catch((err) => {
        res.redirect('/')
    });

})

module.exports = router;