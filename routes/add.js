async function add(req, res) {
  return res.render("pages/add", { data: "Add" });
}

module.exports = add;
