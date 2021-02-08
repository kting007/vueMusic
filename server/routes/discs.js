var express = require('express');
var router = express.Router();
var axios = require('axios')

const headers={
  referer: 'https://c.y.qq.com/',
  host: 'c.y.qq.com'
};
/* GET users listing. */
router.get('/', function(req, res, next) {
  let url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';
  axios.get(url,{
    headers,
    params: req.query
  }).then((response)=>{
    console.log('11')
    res.json(response.data)
    next()
  }).catch((e)=>{
    console.log('error')
  })
});

module.exports = router;
