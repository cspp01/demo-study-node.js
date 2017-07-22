let express = require('express'),
    app = express(),
    path = require( 'path' ),
    ejs = require( 'ejs' ),
    bodyParser = require( 'body-parser' ),
    // 安装express-session和cookie-parser
    session = require( 'express-session' ),
    cookieParser = require( 'cookie-parser' ),
    lo = require('./router/in');

// ejs
// 后缀.ejs可以改为.html
app.set( 'view engine', 'html' );
app.engine( 'html', ejs.__express );
app.set( 'views', path.join( __dirname, '/view' ) );
// post可以获取请求数据
app.use( bodyParser.urlencoded( {
    extended : true
} ) );

//这里传入了一个密钥加session id
app.use(cookieParser('sessiontest'));
app.use(session({
    secret: 'sessiontest',//与cookieParser中的一致
    resave: true,
    saveUninitialized:true
}));
app.use( '/', lo );
app.use( '/login', lo );
app.use( '/user', lo );

app.listen(3000);
console.log('Express app started on port 3000');
