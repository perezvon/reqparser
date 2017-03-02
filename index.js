'use strict';

var express = require('express')

const app = express()

const port = process.env.PORT || 3000;  

app.route('/')
	.get((req, res) => {
      res.json({
		  "ipaddress": "1.1.1.1",
		  "language": "en-US",
		  "software": "Neurally Embedded Microchip"
	  });
    });


app.listen(port, function() {
    console.log('Request header parser app listening on port ' + port);
});