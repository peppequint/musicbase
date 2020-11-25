async function login(req, res) {
  return res.render("pages/login", { data: "Login" });
}

module.exports = login;
