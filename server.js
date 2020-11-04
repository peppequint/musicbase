const express = require("express");
const app = express();
const port = process.env.PORT;

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "/static")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => console.log(`Musicbase running on port ${port}`));

module.exports = { app };
