async function index(req, res) {
  if (!req.session.user) {
    res.redirect("/login");
  } else {
    return res.render("pages/index", { data: "Dashboard", user: req.session.user });
  }
}

module.exports = index;
