/**
 * Created by Antoine on 13/03/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("on est dans l'index du door sensor");
    res.render('coffeemaker', { title: 'Wake up IoT' , subTitle: "coffee maker"});
});

/* POST makeCoffee*/
router.post('/makeCoffee', function(req, res, next) {
		//todo link to nodered
});

module.exports = router;