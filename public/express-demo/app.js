var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var alarmRouter = require('./routes/alarm');

var app = express();
const cors = require('cors')
app.use(cors())
app.all("*",(req,res,next)=>{
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin",'http://localhost:8081');//火狐，360本地开发需要具体写前端的端口看，这是一个坑。
  res.header("Access-Control-Allow-Origin", "*");//谷歌浏览器写*就行
  //允许的header类型
  res.header('Access-Control-Allow-Headers:Origin,X-Requested-With,Authorization,Content-Type,Accept,Z-Key')
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  res.header("X-Powered-By","Express");
  res.header("Content-Type","application/json;charset=utf-8");
  res.header("Access-Control-Allow-Credentials",true)
//     if (req.method.toLowerCase() == 'options')
//       res.send(200);  //让options尝试请求快速结束
//     else
  next();
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/login', function (req, res) {
  res.send('hello world')
})
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/alarm', alarmRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
// const mysql = require('mysql')
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'tangsheng',
//   password: 'iliketangsheng',
//   database: 'test',
//   mutipleStatements: true
// })
// db.connect()
app.listen(8000,()=>{
  console.log('启动成功')
})
// app.get('/alarm',(req,res)=>{
//   let results = {name:'重要告警',leval:1};
//   res.json({ code: 10000, message: results})
// })

module.exports = app;
