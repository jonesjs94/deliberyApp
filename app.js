const express = require("express"),
      app = express(),
      mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:2717/test", {useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


// LOGIN ROUTES

app.get("/", (req, res) => {
	res.redirect("negocios");
});

app.get("/entrar", (req, res) => {
	res.render("entrar");
});

app.get("/registrarse", (req, res) => {
	res.render("registrarse");
})

// BUSINESS ROUTES

app.get("/negocios", (req, res) => {
	res.render("negocios");
});

app.get("/negocio", (req, res) => {
	res.render("negocio");
})

app.listen(3000, () => console.log("Server is up!"));