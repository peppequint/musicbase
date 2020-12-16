const { app } = require("./../server");
const session = require("express-session");

const index = require("./index");
const login = require("./login");
const register = require("./register");
const add = require("./add");

const user = require("./user");

app.use(
  session({
    secret: "musicbase",
    resave: true,
    saveUninitialized: false,
  })
);

app.use(user);

app.get("/", index);
app.get("/login", login);
app.get("/register", register);
app.get("/add", add);
