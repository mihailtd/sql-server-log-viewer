function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<!DOCTYPE html> <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic\"> <link rel=\"stylesheet\" href=\"./styles/normalize.css\"> <link rel=\"stylesheet\" href=\"./styles/milligram.min.css\"> <h1>Configuration: </h1> <label for=\"sql-addr\">SQL Server Address: </label><input id=\"sql-addr\" type=\"text\" placeholder=\"IP / Instance\"> <label for=\"sql-port\">SQL Server Port: </label><input id=\"sql-port\" type=\"number\" placeholder=\"Port\"> <label for=\"sql-db\">SQL Server Database: </label><input id=\"sql-db\" type=\"password\" placeholder=\"Database Name\"> <label for=\"sql-usr\">SQL Server User: </label><input id=\"sql-usr\" type=\"text\" placeholder=\"User\"> <label for=\"sql-pass\">SQL Server Password: </label><input id=\"sql-pass\" type=\"password\" placeholder=\"Password\"> <button type=\"submit\">Save</button>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
