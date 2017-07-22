//login.js
let express = require('express');
let router = express.Router();

//第一次请求时会保存一条用户信息。
router.get( '/', function( req, res, next ) {
    let user = {
        name : "cc",
        age : "22",
        address : "bj"
    };
    // 把登录数据加入session
    req.session.user = user;
    res.render( 'index', {
        title : '第一次请求时会保存一条用户信息'
    } );
} );

//判断用户是否登陆。
router.get( '/user', function( req, res, next ) {
    console.log( req.session.user );
    // 通过判断session中是否存在数据来判断是否已经登录
    if( req.session.user ){
        // 访问其他页面时，获取到session登录数据
        let user = req.session.user;
        let name = user.name;
        res.render( 'user', {
            title : '你好' + name + '，欢迎来到我的家园。'
        } );
    } else {
        res.render( 'user', {
            title : '你还没有登录，先登录下再试试！'
        } );
    }
});

module.exports = router;