async function index(req, res) {
  return res.render("pages/index", { data: "Dashboard", user: req.session.user });
}

module.exports = index;
