// var port = 3000;
// var __dirname = 'C://work/Web/macro';

// var express = require('express');
// var app = express();
// app.get('/', function(req, res) {
//     res.sendFile(__dirname + "/index.html");
// });
// app.listen(port);

// console.log('Server running at port ' + port);
//--------------------------------------------------------
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config"); //상대 경로
var compiler = webpack(webpackConfig);

var express = require('express'); //라이브러리를 들고 온다.
var app = express(); //express() app 넣어준다.
var path = require('path'); 

app.use(webpackDevMiddleware(compiler, { //compiler 웹팩이 미들웨어 api호출
  publicPath: webpackConfig.output.publicPath, //
  stats: {colors: true}, //로그값에 색깔이 입히는 옵션
}));

app.use(express.static(__dirname));  //express 설정 할수 있도록 초기 설정
// Secret : 0x005C71447A483593fc652fB4a004e61D9C96D980
// view engine setup
// __dirname : root folder
app.set('views', path.join(__dirname));
app.set('view engine', 'ejs'); //ejs 는 js에 html 를 사용 할수있 해준다.
app.engine('html', require('ejs').renderFile); //html 파일을 인식 하게 해준다.

app.get('/', function (req, res) {
  res.send('index');
});

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://kschool.click',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    }
  }
}

app.listen(3000);
console.log("Server running on port 3000");