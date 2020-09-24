const express = require("express");
var bodyParser = require("body-parser");
var sqlite3 = require("sqlite3").verbose();
const app = express();
const port = 3000;

var file = "database.db";
var db = new sqlite3.Database(file);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/v1/image/*", (req, res) => {
  var time = Date.getTime();
  var sql = `SELECT * FROM Email WHERE *`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }

    res.json(list);
  });
});

app.post("/api/v1/submit", (req, res) => {
  var sql = `INSERT INTO Email (${time}, "title", "date", "", "")`;

  db.all(sql, [], (err, rows) => {});
});

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`purity test running at http://localhost:${port}`);
  //res.send("test");
});
