'use strict';
// 右键运行服务，就可利用express构建一个很简单的服务器了
let express = require( '3.express' ),
    path = require( 'path' ),
    // 获取post参数包
    bodyParser = require( 'body-parser' ),
    app = express();
// 注册获取参数功能
app.use( bodyParser.urlencoded( {
    extended : true
} ) );

// all()可以匹配所有的http动词，
// 也就是说他可以匹配所有路径的请求
// all()也一样，他匹配到后就不会再匹配
app.all( '/', ( req, res ) => {
    // res.send( 'hee' );
    // 返回html文件
    res.sendFile( path.join( __dirname, '../view/index.html' ) )
} );
// .post根据post方式提交的数据来处理客服端发出的post请求
// .2.post( path( 请求路径 ), function( request（ 请求信息 ）, response（ 响应信息 ） ){}（ 回调 ） )
// 匹配请求路径，匹配到就不会再匹配了
// 设置action请求地址
// 要获取post数据得包含body-parser包和注册获取参数功能
app.post( '/register', ( request, response ) => {
    // 获取post参数
    console.log( request.body );
    response.send( request.body.user );
} );

// 设置端口
app.listen( 3000 );
