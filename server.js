var bodyParser = require("body-parser");
const express = require("express");
var sqlite3 = require("sqlite3").verbose();
var cors = require("cors");
var path = "/images/base.png";
const app = express();
const port = 3001;
const BASE = "/tracker/api/v1/"

var file = "database.db";
var db = new sqlite3.Database(file);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// /\/api\/v1\/images\/*/

app.get(/\tracker\/api\/v1\/images\/*/, (req, res) => {
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

app.get(/\/tracker\/api\/v1\/openimage\/*/, (req, res) => {
  id = "id" + req.url.split("/id")[1].replace(".png", "");
  var sql = `UPDATE Trackers SET opens = opens+1 where key = "${id}"`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
  });
  res.sendFile(__dirname + path);
});

app.get(`${BASE}all`, (req, res) => {
  var sql = `SELECT * FROM Trackers`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
    //console.log(data);
    res.json(data);
  });
});

app.get(/\/tracker\/api\/v1\/reset\/*/, (req, res) => {
  id = "id" + req.url.split("/id")[1].replace(".png", "");
  var sql = `UPDATE Trackers SET opens = 0 where key = "${id}"`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
  });
  res.sendFile(__dirname + path);
});

app.get(/\/tracker\/api\/v1\/remove\/*/, (req, res) => {
  id = "id" + req.url.split("/id")[1];
  var sql = `DELETE FROM Trackers WHERE key = "${id}"`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
  });
  res.sendFile(__dirname + path);
});

app.post(`${BASE}submit`, (req, res) => {
  var inp = JSON.parse(req.body[0]);

  var sql = `INSERT INTO Trackers (key, title, date, opens, sent, type) VALUES ('${inp.key}', '${inp.title}', '${inp.date}', '${inp.opens}', '${inp.sent}', '${inp.type}')`;

  db.all(sql, [], (err, rows) => {
    if (err) console.log(err);
  });
  res.sendStatus(200);
});

app.get("/", (req, res) => { });

app.listen(port, () => {
  console.log(`Tracker running at http://localhost:${port}`);
  //res.send("test");
});
