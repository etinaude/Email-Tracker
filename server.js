const express = require("express");
var bodyParser = require("body-parser");
var sqlite3 = require("sqlite3").verbose();
const app = express();
const port = 3000;

var file = "database.db";
var db = new sqlite3.Database(file);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/v1/questions", (req, res) => {
  var sql = `SELECT * FROM "Answers" `;

  var list = [];

  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      list.push({ id: row.ID, question: row.Question, count: row.Count });
    });
    //console.log(list);
    res.json(list);
  });
});

app.post("/api/v1/submit", (req, res) => {
  list = JSON.parse("[" + req.body[0] + "]");
  console.log(list);
  for (var i = 0; i < list.length; i++) {
    var sql = `UPDATE Answers SET Count = Count + 1 WHERE ID=${list[i]}`;
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
    });
  }
  info = [];
  tot = 0;
  high = 0;
  max = 0;
  var sql = `SELECT * FROM "Answers" `;
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      info.push({ id: row.ID, count: row.Count });
    });
    info.forEach((i) => {
      if (i["count"] > max) {
        max = i["count"];
      }
    });
    info.forEach((i) => {
      let scr = (1 - i["count"] / max) * 3 + 0.5;
      if (list.includes(i["id"])) {
        tot += scr;
      }
      high += scr;
    });
    if (tot < 0) tot = 0;
    if (tot > 100) tot = 100;
    res.json(Math.round(100 - tot));
  });
});

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`purity test running at http://localhost:${port}`);
  //res.send("test");
});
