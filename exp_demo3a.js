var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('Hello World');
});
router.get('/home', function(req, res) {
    res.send('You just visited "/home"!\n');
});

module.exports = router;