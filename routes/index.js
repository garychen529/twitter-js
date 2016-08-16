var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');

router.get('/', function(req, res, next) {
	var tweets = tweetBank.list();
	res.render('index', {tweets: tweets, showForm: true});
});

router.get('/users/:name', function(req, res, next) {
	var userTweets = tweetBank.find({ name: req.params.name });
	res.render('index', {tweets: userTweets, showForm: true, name: req.params.name});
});

router.get('/tweets/:id', function(req, res, next) {
	var tweetWithID = tweetBank.find({ id: +req.params.id });
	res.render('index', {tweets: tweetWithID, showForm: true});
});

router.post('/tweets', function(req, res, next) {
	tweetBank.add(req.body.name, req.body.text);
	res.redirect('/');
});

module.exports = router;