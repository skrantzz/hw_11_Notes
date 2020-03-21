var fs = require("fs");
var path = require("path");
var tableData = require("../db/db.json");
// var journal = require("../db/journal");
// var util = require("util");
// const readFileAsync = util.promisify(fs.readFile);

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(tableData);
  });

  app.post("/api/notes", function(req, res) {
    // .post 'creates' it
    req.body.id = tableData.length + 1;
    tableData.push(req.body);
    // spread operator - converts the object to raw params - noah's way
    // tableData.push({ id, ...req.body });
    // console.log("hi 1", Object.assign({}, { id }, req.body));
    // console.log("hi 2", { id, ...req.body });
    res.json(true);
  });

  app.delete("/api/notes/:id", function(req, res) {
    let deleteNote = tableData.filter(function(e) {
      console.log(e.id == parseInt(req.params.id));
      console.log(e.id, req.params.id);
      return e.id !== parseInt(req.params.id);
    });

    tableData = deleteNote;

    res.json(true);
  });
};
