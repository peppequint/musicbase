const { app } = require("./../server");

const index = require("./index");
const login = require("./login");

const user = require("./user");

app.use(user);

app.get("/", index);
app.get("/login", login);
