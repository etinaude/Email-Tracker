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
  var sql = `SELECT * FROM Email WHERE *`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }

    res.json(list);
  });
});

app.post("/api/v1/submit", (req, res) => {
  console.log(req);
  res.json("hi");
  //console.log(JSON.parse("{0:" + req.body[0] + "}"));

  //var sql = `INSERT INTO Email (${time}, ${title}, ${time}, "", "")`;

  //db.all(sql, [], (err, rows) => {});
  //res.sendStatus(200);
});

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`purity test running at http://localhost:${port}`);
  //res.send("test");
});
