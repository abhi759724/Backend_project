const home = (req, res) => {
  // res.send("<h1> You are now on Home controller </h1>");

  return res.render("home", {
    title: "Homepage",
  });
};
module.exports = home;
