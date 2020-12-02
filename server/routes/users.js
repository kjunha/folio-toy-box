const express = require("express");
const createError = require("http-errors");
const router = express.Router();
const mysql = require("mysql");
const dbconfig = require("../db/config");
const bcrypt = require("bcrypt-nodejs");
const conn = mysql.createConnection(dbconfig);
conn.connect();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// sign up
router.post("/new", function (req, res, next) {
  var email = req.body.email;
  var pwd = req.body.pwd;
  conn.query(`select * from user where email=?`, [email], function (err, rows) {
    if (rows.length) {
      next(createError(403, "email already in use"));
      return;
    } else {
      bcrypt.hash(pwd, null, null, function (err, hash) {
        var user = {
          fname: req.body.fname,
          lname: req.body.lname,
          email: email,
          pwd: hash,
        };
        conn.query(`insert into user set ?`, user, function (err) {
          if (err) {
            next(createError(500, "save error"));
            return;
          } else {
            res.send("ok");
            return;
          }
        });
      });
    }
  });
});

// login
router.post("/login", function (req, res) {
  var email = req.body.email;
  var pwd = req.body.pwd;
  conn.query(
    `select * from user where email=? limit=1`,
    [email],
    function (err, rows) {
      if (rows.length) {
        bcrypt.compare(pwd, rows[0].pwd, function (err, res) {
          if (res) {
            res.send("ok");
            return;
          } else {
            next(createError(401, "password incorrect"));
            return;
          }
        });
      } else {
        next(createError(405, "user not found"));
        return;
      }
    }
  );
});

module.exports = router;
