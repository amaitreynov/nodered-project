/**
 * Created by Antoine on 13/03/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Wake up IoT', subTitle: "Home"});
});

/* POST set smartphone alarm time page. */
router.post('/setAlarm', function (req, res, next) {
    request.post({url:'http://127.0.0.1:1880/setAlarm', form: {key:'value'}}, function(err,httpResponse,body){
        if(err)
            console.log(err);
        else {
            // console.log(httpResponse);
            // console.log(JSON.stringify(body));
            res.render('smartphone', { title: 'Wake up IoT' , subTitle: "Smartphone - Alarm Set successfully"});
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
    //todo link to nodered
    res.render('smartphone', {title: 'Wake up IoT', subTitle: "Smartphone - Snooze"});
});

module.exports = router;