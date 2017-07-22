// router为了把路由分层，不然页面中会有大量的路由，太乱，不好维护
let express = require( 'express' ),
    ejs = require( 'ejs' ),
    path = require( 'path' ),
    // 包含router页面
    routerIn = require( './router/in.js' ),
    app = express();
app.set( 'view engine', 'html' );
app.engine( 'html', ejs.__express );
app.set( 'views', path.join( __dirname, '../view' ) );
// 一个router页面可以包含多个路由
app.use( '/', routerIn );
app.use( '/login', routerIn );
app.listen( 2000 );