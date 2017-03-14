/**
 * Created by Antoine on 13/03/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var moment = require('moment');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone"});
});

/* POST set smartphone alarm time page. */
router.post('/setAlarm', function (req, res, next) {
    //recup var du form time
    //format avec moment js
    let timeStamp = req.body.time;

    //include in post req below
    request.post({url: 'http://127.0.0.1:1880/setAlarm', form: {key: timeStamp}}, function (err, httpResponse, body) {
        if (err)
            console.log(err);
        else
            res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Alarm set successfully"});
    });
});

/* POST set smartphone alarm time page. */
router.post('/disableAlarm', function (req, res, next) {
    request.post({url: 'http://127.0.0.1:1880/disableAlarm', form: {key: 'you'}}, function (err, httpResponse, body) {
        if (err)
            console.log(err);
        else
            res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Alarm unset successfully"});
    });
});

/* GET set smartphone alarm time page. */
router.get('/setAlarm', function (req, res, next) {
    //todo link to nodered
    res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Set alarm"});
});

/* POST set smartphone alarm time page. */
router.post('/snooze', function (req, res, next) {
    //todo link to nodered
    res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Snooze"});
});

module.exports = router;