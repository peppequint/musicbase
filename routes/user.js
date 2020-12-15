const express = require("express");
const User = require("./../models/User");

const auth = require("./../middleware/auth");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    const token = await user.generateAuthToken();

    res.status(201).redirect("/");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findByCredentials(name, password);
    if (!user) {
      return res.status(401).send({ error: "Login failed!" });
    }

    const token = await user.generateAuthToken();

    req.session.user = {
      name: user.name,
      email: user.email,
      id: user._id,
      token: token,
    };

    res.status(201).redirect("/");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.token.filter((token) => {
      return token.token != req.token;
    });

    await req.user.save();

    req.send();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
