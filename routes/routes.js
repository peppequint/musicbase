const { app } = require("./../server");

const index = require("./index");

app.get("/", index);
