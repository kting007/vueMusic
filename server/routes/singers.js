var express = require('express');
var router = express.Router();
var axios = require('axios')

const headers={
    referer: 'https://c.y.qq.com/',
    host: 'c.y.qq.com'
};
/* GET users listing. */
router.get('/', function(req, res, next) {
    let url = "https://c.y.qq.com/v8/fcg-bin/v8.fcg"
    axios.get(url,{
        headers,
        params: req.query
    }).then((response)=>{
        console.log('12')
        res.json(response.data)
        next()
    }).catch((e)=>{
        console.log('error')
    })
});

module.exports = router;
