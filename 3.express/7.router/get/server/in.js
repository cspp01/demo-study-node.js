// router为了把路由分层，不然页面中会有大量的路由，太乱，不好维护
let express = require( 'express' ),
    ejs = require( 'ejs' ),
    path = require( 'path' ),
    routerIn = require( './router/in.js' ),
    app = express();
app.set( 'view engine', 'html' );
app.engine( 'html', ejs.__express );
app.set( 'views', path.join( __dirname, '../view' ) );
//
app.use( '/', routerIn );
app.listen( 2000 );