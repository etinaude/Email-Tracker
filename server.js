var bodyParser = require("body-parser");
const express = require("express");
var sqlite3 = require("sqlite3").verbose();
var cors = require("cors");
const PATH = "/images/base.png";
const INDEX = "/public/index.html";
const APP = express();
const PORT = 3001;
const BASE = "/tracker/api/v1/"

var file = "database.db";
var db = new sqlite3.Database(file);
APP.use(express.static("public"));
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(cors());
// /\/api\/v1\/images\/*/

APP.get(/\tracker\/api\/v1\/images\/*/, (req, res) => {
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

APP.get(/\/tracker\/api\/v1\/openimage\/*/, (req, res) => {
  var n = Date.now();
  id = "id" + req.url.split("/id")[1].replace(".png", "");

  var sql = `INSERT INTO ${id} VALUES (${n}); -- `;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
  });

  sql = `UPDATE Trackers SET opens = opens+1 where key = "${id}"`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
  });

  res.sendFile(__dirname + PATH);
});

APP.get(`${BASE}all`, (req, res) => {
  var sql = `SELECT * FROM Trackers`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
    //console.log(data);
    res.json(data);
  });
});

APP.get(/\/tracker\/api\/v1\/reset\/*/, (req, res) => {
  id = "id" + req.url.split("/id")[1].replace(".png", "");
  var sql = `UPDATE Trackers SET opens = 0 where key = "${id}"`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
  });

  var sql = `DELETE FROM ${id};`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
  });
  res.sendStatus(200);
});

APP.get(/\/tracker\/api\/v1\/remove\/*/, (req, res) => {
  id = "id" + req.url.split("/id")[1];
  var sql = `DELETE FROM Trackers WHERE key = "${id}"`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
  });
  res.sendFile(__dirname + PATH);
});

APP.get(/\/tracker\/api\/v1\/history\/*/, (req, res) => {
  id = "id" + req.url.split("/id")[1];
  var sql = `SELECT * FROM ${id}`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
    //console.log(data);
    res.json(data);
  });
});


APP.post(`${BASE}submit`, (req, res) => {
  var inp = JSON.parse(req.body[0]);

  var sql = `INSERT INTO Trackers (key, title, date, opens, sent, type) VALUES ('${inp.key}', '${inp.title}', '${inp.date}', '${inp.opens}', '${inp.sent}', '${inp.type}');`;

  db.all(sql, [], (err, rows) => {
    if (err) console.log(err);
  });

  sql = `CREATE TABLE ${inp.key} (date varchar(255));`;

  db.all(sql, [], (err, rows) => {
    if (err) console.log(err);
  });
  res.sendStatus(200);
});




APP.get("/tracker", (req, res) => {
  res.sendFile(__dirname + INDEX);
});

APP.listen(PORT, () => {
  console.log(`Tracker running at https://localhost:${PORT}`);
  //res.send("test");
});