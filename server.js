var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'http'){
        next();
    }else{
        res.redirect('http://' + req.hostname + req.url);
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.static('public'));

app.listen(PORT, function(){
	console.log('Express is up on a port '+ PORT);
});