var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send({
        message:"周鹏ttyp",
        age:'19'
    });
})

module.exports = router;