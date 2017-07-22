let express = require( '3.express' ),
    path = require( 'path' ),
    app = express();
// 指定模板渲染引擎
app.set( 'view engine', 'ejs' );
// 设置放置模板文件的目录
// path.join和并未path，主要为了解析../
app.set( 'views', path.join( __dirname, '../view' ) );
app.get( '/', ( req, res ) => {
    // render对网页模板进行渲染
    // 在渲染模板时，第二个参数可为模板传入变量
    res.render( 'in', {
        title : 'ejs',
        arr : [
            'ejs1', 'ejs2', 'ejs3'
        ]
    } );
} );
app.listen( 3000 );