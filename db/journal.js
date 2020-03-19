var util = require("util");
var fs = require("fs");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Journal {
  write() {}
  read() {
    return readFileAsync("db/db.json", "utf8");
  }
  getNotes() {
    return this.read().then(notes => {
      let parsedNotes;
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }
      return parsedNotes;
    });
  }
  addNotes() {}
  removeNote() {}
}

module.exports = new Journal();
