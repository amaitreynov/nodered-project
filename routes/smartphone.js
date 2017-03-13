/**
 * Created by Antoine on 13/03/2017.
 */
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
		res.render('index', { title: 'Wake up IoT' , subTitle: "Home"});
});

/* POST set smartphone alarm time page. */
router.post('/setAlarm', function(req, res, next) {
		//todo link to nodered
		res.render('smartphone', { title: 'Wake up IoT' , subTitle: "Smartphone - Set alarm"});
});

/* GET set smartphone alarm time page. */
router.get('/setAlarm', function(req, res, next) {
		//todo link to nodered
		res.render('smartphone', { title: 'Wake up IoT' , subTitle: "Smartphone - Set alarm"});
});

/* POST set smartphone alarm time page. */
router.post('/snooze', function(req, res, next) {
		//todo link to nodered
		res.render('smartphone', { title: 'Wake up IoT' , subTitle: "Smartphone - Snooze"});
});

module.exports = router;