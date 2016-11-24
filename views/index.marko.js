function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<!DOCTYPE html> <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic\"> <link rel=\"stylesheet\" href=\"./styles/normalize.css\"> <link rel=\"stylesheet\" href=\"./styles/milligram.min.css\"> <html><head><title>Test </title></head><body><h1></h1> <div><a href=\"/dashboard\">Dashboard </a></div><div><a href=\"/config\">Config </a></div><div><a href=\"/log\">Log</a></div></body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
