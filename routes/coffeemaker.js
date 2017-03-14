/**
 * Created by Antoine on 13/03/2017.
 */
var express = require('express');
var router = express.Router();
var isReady = false;

/* GET home page. */
router.get('/', function(req, res, next) {
    if(isReady)
        res.render('coffeemaker', { title: 'Wake up IoT' , subTitle: "coffee maker - coffee is READY !! "});
    else
        res.render('coffeemaker', { title: 'Wake up IoT' , subTitle: "coffee maker is not ready"});
});

/* POST makeCoffee*/
router.post('/makeCoffee', function(req, res, next) {
    isReady = true;
    res.render('coffeemaker', { title: 'Wake up IoT' , subTitle: "coffee maker - coffee is READY !! "});
});

/* POST makeCoffee*/
router.post('/drink', function(req, res, next) {
    isReady = false;
    res.render('coffeemaker', { title: 'Wake up IoT' , subTitle: "coffee maker is not ready"});
});

module.exports = router;