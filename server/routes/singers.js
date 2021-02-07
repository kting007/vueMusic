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
    let url = 'https://u.y.qq.com/cgi-bin/musics.fcg?-=getUCGI07415489655888097&g_tk=5381&sign=zzayv3sxxtpg0q7bbvf2f3fef04bda3a286eeb40136f6b80f4a&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%2C%22singerList%22%3A%7B%22module%22%3A%22Music.SingerListServer%22%2C%22method%22%3A%22get_singer_list%22%2C%22param%22%3A%7B%22area%22%3A-100%2C%22sex%22%3A-100%2C%22genre%22%3A-100%2C%22index%22%3A-100%2C%22sin%22%3A0%2C%22cur_page%22%3A1%7D%7D%7D';
    axios.get(url,{
        headers,
    }).then((response)=>{
        console.log('11')
        res.json(response.data)
    }).catch((e)=>{
        console.log('error')
    })
});

module.exports = router;
