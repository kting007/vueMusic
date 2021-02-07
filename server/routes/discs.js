var express = require('express');
var router = express.Router();
var axios = require('axios')

const headers={
  'accept': 'application/json, text/javascript',
  'origin': 'https://y.qq.com',
  'referer': 'https://y.qq.com/',
  'sec-ch-ua':' "Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
  'sec-ch-ua-mobile': '?0',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-site',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36',
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
  }).catch((e)=>{
    console.log('error')
  })
});

module.exports = router;
