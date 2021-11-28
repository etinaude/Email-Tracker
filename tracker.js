const bodyParser = require("body-parser");
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDocument = require('./swagger.json');

const PATH = "/images/base.png";
const INDEX = "/front/www/index.html";
const APP = express();
const PORT = 3001;
const BASE = "/tracker/api/v1/"

const db = new sqlite3.Database("database.db");


APP.use(express.static("public"));
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(bodyParser.json());
APP.use(cors());
APP.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes*.js'], // files containing annotations as above
};

// /\/api\/v1\/images\/*/

APP.get(/\tracker\/api\/v1\/images\/*/, (req, res) => {
  const id = req.url.split("/").pop();
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
  const id = req.url.split("/").pop().replace(".png", "");
  var sql = `INSERT INTO ${id} VALUES (${(new Date).getTime()}); -- `;

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
    res.json(data);
  });
});

APP.get(/\/tracker\/api\/v1\/reset\/*/, (req, res) => {
  const id = req.url.split("/").pop().replace(".png", "");
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
  const id = req.url.split("/").pop();
  var sql = `DELETE FROM Trackers WHERE key = "${id}"`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
  });

  sql = `DROP TABLE "${id}"`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
  });

  res.sendFile(__dirname + PATH);
});

APP.get(/\/tracker\/api\/v1\/history\/*/, (req, res) => {
  const id = req.url.split("/").pop();
  var sql = `SELECT * FROM ${id}`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
    //console.log(data);
    res.json(data);
  });
});

APP.post(`${BASE}email`, (req, res) => {
  const UUID = `id${uuidv4()}`.replaceAll("-", "");


  let sql = `INSERT INTO Trackers (key, title, date, opens, sent, type) VALUES('${UUID}', '${req.body.title}', '${new Date().getTime()}', '0', '${req.body.sentTo}', 'email'); `;

  db.all(sql, [], (err, rows) => {
    if (err) console.log(err);
  });

  sql = `CREATE TABLE ${UUID} (date varchar(255)); `;

  db.all(sql, [], (err, rows) => {
    if (err) console.log(err);
  });

  res.json({ UUID: `${UUID}.png` });
});

APP.post(`${BASE} submit`, (req, res) => {
  var inp = JSON.parse(req.body[0]);

  var sql = `INSERT INTO Trackers(key, title, date, opens, sent, type) VALUES('${inp.key}', '${inp.title}', '${inp.date}', '${inp.opens}', '${inp.sent}', '${inp.type}'); `;

  db.all(sql, [], (err, rows) => {
    if (err) console.log(err);
  });

  sql = `CREATE TABLE ${inp.key} (date varchar(255)); `;

  db.all(sql, [], (err, rows) => {
    if (err) console.log(err);
  });
  res.sendStatus(200);
});

APP.get("/", (req, res) => {
  res.sendFile(__dirname + INDEX);
});

APP.listen(PORT, () => {
  console.log(`Tracker running at https://localhost:${PORT}`);
  //res.send("test");
});


// APP.get("/", (req, res) => {
//  res.sendStatus(200)
// });