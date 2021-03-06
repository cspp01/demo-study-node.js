let express = require( 'express' ),
    app = express(),
    ejs = require( 'ejs' ),
    path = require( 'path' ),
    bodyParser = require( 'body-parser' ),
    loginRouter = require( './router/in' ),
    mongoose = require( 'mongoose' ),
    session = require( 'express-session' ),
    cookieParser = require( 'cookie-parser' );
// 连接数据库
mongoose.Promise  = require("bluebird");
global.mod = require( './database/model' );
global.db = mongoose.connect( 'mongodb://127.0.0.1:27017/test', {
    useMongoClient : true
} ).then( db => {
    console.log( '连接成功' );
} );
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

app.use( '/', loginRouter );
app.use( '/login', loginRouter );
app.use( '/register', loginRouter );

app.listen( 3000 );