/**
 * Created by Antoine on 13/03/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');

var time = "none";
var isEnable = false;
var isAuthorizedToSnooze = true;

/* GET home page. */
router.get('/', function (req, res, next) {
    // console.log("on est dans l'index du door sensor");
    res.render('doorSensor', {title: 'Wake up IoT', subTitle: "door sensor, time set -> " + time});
});

/* GET home page. */
router.get('/isAuthorizedToSnooze', function(req, res, next) {
    //todo
router.get('/isAuthorizedToSnooze', function (req, res, next) {
    //todo
});

/* POST set door sensor alarm time according to what's been posted via /smartphone/setAlarm page. */
router.post('/setAlarm', function (req, res, next) {
    time = req.body.key;
    isEnable = true;
    res.redirect('/doorsensor/');
});

/* POST reset door sensor alarm time. */
router.post('/disableAlarm', function (req, res, next) {
    time = "none";
    isEnable = false;
    res.redirect('/doorsensor/');
});

/* POST tell device that the door has been opened. */
router.post('/doorisopen', function (req, res, next) {
    request.post({url: 'http://127.0.0.1:1880/doorisopen', form: {key: "none"}}, function (err, httpResponse, body) {
        if (err)
            res.render('doorsensor', {title: 'Wake up IoT', subTitle: "DoorSensor - an error occured"});
        else {
            time = "none";
            isEnable = false;
            res.render('doorsensor', {title: 'Wake up IoT', subTitle: "DoorSensor - door is open !!!"});
        }
    });
});

/* POST snooze. */
router.post('/snooze', function (req, res, next) {
    //todo link to nodered
    res.render('index', {title: 'Wake up IoT', subTitle: "Door sensor - Snooze"});
});

module.exports = router;