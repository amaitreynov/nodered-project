/**
 * Created by Antoine on 13/03/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("on est dans l'index du door sensor");
    res.render('index', { title: 'Wake up IoT' , subTitle: "Home door sensor"});
});

/* POST set door sensor alarm time according to what's been posted via /smartphone/setAlarm page. */
router.post('/setAlarm', function(req, res, next) {
		console.log("On est dans le set alarm du door sensor");
		res.redirect('/doorsensor/');
});

/* POST snooze. */
router.post('/snooze', function(req, res, next) {
		//todo link to nodered
		res.render('index', { title: 'Wake up IoT' , subTitle: "Door sensor - Snooze"});
});

module.exports = router;