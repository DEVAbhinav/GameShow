var express = require('express');
var router = express.Router();
var Reference = require('../Models/reference.js')


router.post('/generateMultipleReference', function(req, res) {
    //if (req.session.admin && req.session.admin == "admin") {
		var i=0;
		var resArray = [];
		
		var users = req.body.users;//users in an array of mixed types  {email : string, trekreg_ID: number}
		for (i=0; i<users.length; i++) {

	        var newReference = new Reference({
	            state: true,

	        });

	        console.log("the new user registered is : " + newReference);
	        newReference.referenceNumber = newReference._id //crypto.createHash('md5').update(req.body.email_ID).digest('hex')
	            newReference.email_ID: users[i].email,
	            newReference.trekreg_ID : users[i].id

	        newReference.save(function(err) {
	            if (!err) {
			        resArray.push(newReference);
	               // res.send({ id: newReference.referenceNumber });
	            } else {
	                console.log(err);
	                return    res.send("try new email_ID")
	            }

	        });
	    }
	    res.send({valid : 1, data : resArray});
    //} else
     //   res.send(valid:0, redirect:"/admin");
});


module.exports = router;