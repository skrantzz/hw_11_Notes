var fs = require("fs");
var journal = require("../db/journal");
// var util = require("util");
// const readFileAsync = util.promisify(fs.readFile);

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    journal
      .getNotes()
      //   get notes is the async part
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err));
  });
};
