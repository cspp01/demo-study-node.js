let express = require( '3.express' ),
    path = require( 'path' ),
    app = express();
// 中间件就是处理http请求的函数，
// 用来完成各种特定的任务，如：检查用户是否登录，添加公共方法等
// 最大特点:一个中间件完成可以把数据在传递个下一个中间件
// 中间件是相对于你的服务器地址的如（localhost:2000）
// 每次运行服务器下的网页都会运行一遍所有中间件
// * 第一个参数可选，为对应哪路由地址的中间件，
// * 不写第一个参数的中间件，所有地址都会经过这个中间件
app.use( '/register', ( req, res ,next ) => {
    // res.send( '123' ); // 在这里send后就不会进入下面的send
    console.log( '>中间件1' );
    // 判断是否填写了用户名，填写了继续下了中间件
    // 用户名为空，则返回提示，用户名不能为空的页面
    req.query.user
        ? next()
        : res.send( '用户名不能为空' );
} );
app.use( ( req, res, next ) => {
    res.mm = 100;
    console.log( '>中间件2' );
    // 表示把请求数据传递给下一个中间件
    next();
} );
app.use( ( req, res, next ) => {
    console.log( '>中间件3' );
    res.mm -= 30;
    next();
} );
app.use( ( req, res, next ) => {
    console.log( '>中间件4' );
    res.mm -= 30;
    next();
} );
app.use( ( req, res, next ) => {
    console.log( '>中间件5' );
    res.mm -= 30;
    next();
} );
app.get( '/', ( req, res ) => {
    console.log( '>index' );
    res.sendFile( path.join( __dirname, '../view/index.html' ) );
    console.log( res.mm );
} );
app.get( '/register', ( req, res ) => {
    console.log( '>register' );
    res.send( req.query);
    console.log( res.mm );
} );

app.listen( 2000 );
