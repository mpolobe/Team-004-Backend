var express = require("express");
var router = new express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a user resource");
});

module.exports = router;
