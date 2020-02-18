const express = require("express"),
      app = express(),
      mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:2717/test", {useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("login");
})

app.listen(3000, () => console.log("Server is up!"));