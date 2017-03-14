/**
 * Created by Antoine on 13/03/2017.
 */
var express = require('express');
var router = express.Router();
var time = "not";
var isEnable = false;

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("on est dans l'index du door sensor");
    res.render('doorSensor', { title: 'Wake up IoT' , subTitle: "door sensor, time set -> " + time});
});

/* POST set door sensor alarm time according to what's been posted via /smartphone/setAlarm page. */
router.post('/setAlarm', function(req, res, next) {
        time = req.body.key;
		isEnable = true;
		res.redirect('/doorsensor/');
});

/* POST snooze. */
router.post('/snooze', function(req, res, next) {
		//todo link to nodered
		res.render('index', { title: 'Wake up IoT' , subTitle: "Door sensor - Snooze"});
});

module.exports = router;