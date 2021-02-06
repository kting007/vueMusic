const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.static('static',{
  extensions:['html','htm']
}))
function mid_component(req,res,next){
console.log('请求来了')
next();
}
app.use(mid_component)
app.get('/alarm',function (req, res) {
  res.send('ads')
})
app.use('/name',function (req, res) {
  res.send('this is name')
})

app.listen(8001,function () {
  console.log('启动成功')
})
