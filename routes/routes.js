const { app } = require("./../server");

const index = require("./index");

const user = require("./user");

app.use(user);

app.get("/", index);
