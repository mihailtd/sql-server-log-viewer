function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<!DOCTYPE html> <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic\"> <link rel=\"stylesheet\" href=\"./styles/normalize.css\"> <link rel=\"stylesheet\" href=\"./styles/milligram.min.css\"> <h1>Dashboard</h1>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
