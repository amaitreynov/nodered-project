/**
 * Created by Antoine on 13/03/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var moment = require('moment');
var _ = require('lodash');

// Alarm var
var time = "none";
var isEnable = false;
var isRinging = true;
var isSnoozed = false;

/* GET home page. */
router.get('/', function (req, res, next) {
    if (isEnable) {
        res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Alarm is set to : " + time});
    }
    else if(isSnoozed)
        res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Alarm is snoozed"});
    else
        res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone"});
});

/* POST set smartphone alarm time page. */
router.post('/setAlarm', function (req, res, next) {

    if(_.isEmpty(req.body.time) || _.isNil(req.body.time))
        return res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Time is empty or invalid"});

    //recup var du form time
    //format avec moment js
    let time = moment(req.body.time).format();
    let formattedTime = moment(req.body.time).format("dddd, MMMM Do YYYY, h:mm a");

    //include in post req below
    request.post({
        url: 'http://127.0.0.1:1880/setAlarm',
        form: {key: formattedTime}
    }, function (err, httpResponse, body) {
        if (err)
            res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - an error occured, alarm unset"});
        else {
            isEnable = true;
            res.render('smartphone', {
                title: 'Wake up IoT',
                subTitle: "Smartphone - Alarm set successfully to : " + formattedTime
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
	if(isRinging)
		// Check if is authozired to snooze
		request.get({
			url: 'http://127.0.0.1:1880/isAuthorizedToSnooze',
			form: {key: "none"}
		}, function (err, httpResponse, body) {
			if (err)
				console.log(err);
			else
			{
				if(body === "true")
                    res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Alarm is snoozed"});
				else
                    res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Alarm can not be snoozed"});
			}

		});
	else
    	res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Alarm is not ringing"});
});

/* POST set smartphone alarm time page. */
router.post('/doorisopen', function (req, res, next) {
    //todo if alarm riinging -> shut
    //res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Snooze"});
});

module.exports = router;