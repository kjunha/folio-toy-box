var express = require("express");
const { HttpError } = require("http-errors");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json("server loaded");
});

module.exports = router;
