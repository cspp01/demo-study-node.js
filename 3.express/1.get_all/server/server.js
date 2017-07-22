'use strict';
// 右键运行服务，就可利用express构建一个很简单的服务器了
let express = require( 'express' ),
    app = express();

// all()可以匹配所有的http动词，
// 也就是说他可以匹配所有路径的请求
app.all( '/', ( req, res ) => {
    res.send( 'hee' );
} );

// .get根据请求数据来处理客服端发出的get请求
// .get( path( 请求路径 ), function( request（ 请求信息 ）, response（ 响应信息 ） ){}（ 回调 ） )
// 匹配请求路径，匹配到就不会再匹配了
// 设置根目录

app.get( '/', ( req, res ) => {
    console.log( 'hello' );
    res.send( '<a href="./app" style="color:#f00">hello</a>' );
} );

app.get( '/app', ( req, res ) => {
    // res.send做了的操作res.write( 'hahaha' ); res.end();
    res.send( 'hello12312' );
    // res.write( 'hahaha' );
    // res.end();
} );

// 设置端口
app.listen( 3000 );
