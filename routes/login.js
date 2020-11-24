async function login(req, res) {
  return res.render("pages/index", { data: "Login" });
}

module.exports = login;
