async function register(req, res) {
  return res.render("pages/register", { data: "Register" });
}

module.exports = register;
