/**
 * Created by Antoine on 13/03/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var moment = require('moment');

// Alarm var
var time = "none";
var isEnable = false;

/* GET home page. */
router.get('/', function (req, res, next) {
		if (isEnable) {
				res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Alarm is set to : " + time});
		}
		else
				res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone"});
});

/* POST set smartphone alarm time page. */
router.post('/setAlarm', function (req, res, next) {
		//recup var du form time
		time = req.body.time;

		//format avec moment js
		//todo try / catch si jamais bad value
		//todo check if time is empty, cut req
		let formattedTime = moment(time);

		//include in post req below
		request.post({url: 'http://127.0.0.1:1880/setAlarm', form: {key: formattedTime}}, function (err, httpResponse, body) {
				if (err)
						res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - an error occured, alarm unset"});
				else {
						isEnable = true;
						res.render('smartphone', {
								title: 'Wake up IoT',
								subTitle: "Smartphone - Alarm set successfully to : " + time
						});
				}
		});
});

/* POST set smartphone alarm time page. */
router.post('/disableAlarm', function (req, res, next) {
		//include in post req below
		request.post({url: 'http://127.0.0.1:1880/disableAlarm', form: {key: "none"}}, function (err, httpResponse, body) {
				if (err)
						res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - an error occured, alarm unset"});
				else {
						time = "none";
						isEnable = false;
						res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Alarm successfully unset"});
				}
		});
});

/* GET set smartphone alarm time page. */
router.get('/setAlarm', function (req, res, next) {
		//todo link to nodered
		res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Set alarm"});
});

/* POST set smartphone alarm time page. */
router.post('/snooze', function (req, res, next) {
		request.get({
				url: 'http://127.0.0.1:1880/isAuthorizedToSnooze',
				form: {key: "none"}
		}, function (err, httpResponse, body) {
				if (err)
						res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - an error occured, alarm unset"});
				else {
						time = "none";
						isEnable = false;
						res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Alarm successfully unset"});
				}
		});
		res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Snooze"});
});

/* POST set smartphone alarm time page. */
router.post('/doorisopen', function (req, res, next) {
		//todo if alarm riinging -> shut
		//res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Snooze"});
});

module.exports = router;