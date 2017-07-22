let express = require( '3.express' ),
    router = express.Router();
// 获取in页面
router.get( '/', ( res, req ) => {
    req.render( 'in', {
        title : '<h2>6.ejs</h2><p>haha</p>'
    } )
} );

module.exports = router;