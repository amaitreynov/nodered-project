var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wake up IoT' , subTitle: "Home"});
});

router.post('/coffeemaker', function(req, res, next) {
  //todo link with nodered => put coffeemaker on
		res.render('index', { title: 'Wake up IoT' , subTitle: "Power coffee maker"});
});

module.exports = router;
