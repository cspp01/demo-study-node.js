'use strict';
let express = require( '3.express' ),
    path = require( 'path' ),
    app = express();

// 相当于把public的文件放到根个目录
app.use( express.static( __dirname + '/public' ) );

app.all( '/', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'index.html' ) )
} );
app.listen( 3000 );
