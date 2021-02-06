var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
    let results = {name:'重要告警',leval:1};
    res.json({ code: 10000, message: results})
});

module.exports = router;
