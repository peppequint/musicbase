const { app } = require("./../server");

const index = require("./index");
const login = require("./login");
const register = require("./register");

const user = require("./user");

app.use(user);

app.get("/", index);
app.get("/login", login);
app.get("/register", register);
