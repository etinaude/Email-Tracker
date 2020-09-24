const express = require("express");
var path = "/images/base.png";
var bodyParser = require("body-parser");
var sqlite3 = require("sqlite3").verbose();
const app = express();
const port = 3000;

var file = "database.db";
var db = new sqlite3.Database(file);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// /\/api\/v1\/images\/*/

app.get(/\/api\/v1\/images\/*/, (req, res) => {
  id = "id" + req.url.split("/id")[1];
  var sql = `SELECT * FROM Trackers where key = "${id}"`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
    //console.log(data);
    res.json(data);
  });
});

app.get(/\/api\/v1\/openimage\/*/, (req, res) => {
  id = "id" + req.url.split("/id")[1].replace(".png", "");
  var sql = `UPDATE Trackers SET opens = opens+1 where key = "${id}"`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
  });
  res.sendFile(__dirname + path);
});

app.get("/api/v1/all", (req, res) => {
  var sql = `SELECT * FROM Trackers`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
    //console.log(data);
    res.json(data);
  });
});

app.post("/api/v1/submit", (req, res) => {
  var inp = JSON.parse(req.body[0]);

  var sql = `INSERT INTO Trackers (key, title, date, opens, sent, type) VALUES ('${inp.key}', '${inp.title}', '${inp.date}', '${inp.opens}', '${inp.sent}', '${inp.type}')`;

  db.all(sql, [], (err, rows) => {
    if (err) console.log(err);
  });
  res.sendStatus(200);
});

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`Tracker running at http://localhost:${port}`);
  //res.send("test");
});
