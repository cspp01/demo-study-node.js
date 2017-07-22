'use strict';
let express = require( '3.express' ),
    bodyParser = require( 'body-parser' ),
    path = require( 'path' ),
    app = express();

app.use( bodyParser.urlencoded( {
    extended : true
} ) );

// 相当于把public的文件放到根个目录
app.use( express.static( __dirname + '/public' ) );

app.all( '/', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'index.html' ) )
} );
app.post( '/register', ( request, response ) => {
    console.log( request.body );
    if( request.body.user == '123' ) {
        // send,sendXxx只能有一个
        response.send( '用户名已经注册' );
        response.sendStatus( 203 );
    } else {
        // response.send( '注册成功' );
        // 设置状态码，send()或者sendStatus()
        response.sendStatus( 200 );
    }
} );
app.listen( 3000 );
