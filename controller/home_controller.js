const home_controller = (req, res) => {
  res.send("<h1>Hello World! </h1>"); // render the view with an empty object as data to pass into it's template
};
module.exports = home_controller;
