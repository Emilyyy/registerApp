var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/User.js');
var jwt = require('jwt-simple');

var app = express();

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
})

app.post('/register', function (req, res) {
    var user = req.body;

    var newUser = new User({
        email: user.email,
        password: user.password
    })


    newUser.save(function (err) {
       createSendToken(newUser, res);
    })
})

app.post('/login', function(req, res){
    req.user = req.body;

    var searchUser = {
        email: req.user.email
    };

    User.findOne(searchUser, function(err, user){
        if(err) throw err

        if(!user)
            res.status(401).send({message: 'Wrong email/password'});
        
        user.comparePasswords(req.user.password, function(err, isMatch){
            if(err) throw err;
            if(!isMatch)
                return res.status(401).send({message: 'Wrong email/password'});

                createSendToken(user, res);
        });
    })
})

function createSendToken(user, res){

    var payload = {
        sub: user.id
    }

    var token = jwt.encode(payload, "shhhh...");

    res.status(200).send({
        user: user.toJSON(),
        token: token
    });
}



app.get('/jobs', function (req, res) {
    for (let wocao in req.headers) {
        console.log("/jobs: " + wocao, req.headers[wocao]);

    }

    if (!req.headers.authorization) {
        return res.status(401).send({
            message: 'You are not authorized'
        });
    }

    var token = req.headers.authorization.split(' ')[1];
    var payload = jwt.decode(token, "shhhh...");

    if (!payload.sub)
    {        
        res.status(401).send({ message: 'Authentication failed' });
    }
    res.json([
        'Cook',
        'SuperHero',
        'Unicorn Wisperer', 
        'Toast Inspector'
    ]);
})

mongoose.connect('mongodb://localhost/registerApp', { useNewUrlParser: true });


var server = app.listen(3000, function () {
    console.log('api listening on', server.address().port);
})