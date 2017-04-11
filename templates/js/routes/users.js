var router = require('express').Router();

router.get('/', function(req, res) {
  res.send('Respond with a resource');
});

module.exports = router;