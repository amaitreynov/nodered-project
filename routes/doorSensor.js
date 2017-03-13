/**
 * Created by Antoine on 13/03/2017.
 */
var express = require('express');
var router = express.Router();

/* POST set door sensor alarm time according to what's been posted via /smartphone/setAlarm page. */
router.post('/setAlarm', function(req, res, next) {
		//todo link to nodered
		res.render('index', { title: 'Wake up IoT' , subTitle: "Door sensor - Set alarm"});
});

/* POST snooze. */
router.post('/snooze', function(req, res, next) {
		//todo link to nodered
		res.render('index', { title: 'Wake up IoT' , subTitle: "Door sensor - Snooze"});
});

module.exports = router;