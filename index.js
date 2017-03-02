'use strict';

var express = require('express')

const app = express()

const port = process.env.PORT || 3000;  

app.route('/')
	.get((req, res) => {
	var software = req.headers['user-agent'];
	var language = req.headers['accept-language'];
      res.json({
		  "ipaddress": req.ip,
		  "language": language,
		  "software": software
	  });
    });


app.listen(port, function() {
    console.log('Request header parser app listening on port ' + port);
});