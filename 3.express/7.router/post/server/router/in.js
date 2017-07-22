let express = require( 'express' ),
    router = express.Router();
router.route( '/login' ).get( ( req, res ) => {
    res.render( 'loginShow', {
        title : '<h1>post<sup>ejs</sup></h1>'
    } )
} ).post( ( req, res ) => {

} );
router.get( '/', ( req, res ) => {
    res.render( 'login', {
        title : '<h1>post首页</h1>'
    } )
} );

module.exports = router;