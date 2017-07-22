let express = require( 'express' ),
    router = express.Router(),
    session = require( 'express-session' );
// 首页
router.get( '/', ( req, res ) => {
    req.query.t && delete req.session.userInfo;
    res.render( 'index', {
        title : '首页',
        userInfo : req.session.userInfo || null
    } )
} );
// 登录路由
router.route( '/login' ).get( ( req, res ) => {
    // 跳转到登录页
    res.render( 'login', {
        title : '登录'
    } )
} ).post( ( req, res ) => {
    // 登录
    // 获取
    let adminsM = global.mod.getModel( 'admins' ),
        // 提交数据
        reqs = {
            user : req.body.username,
            pass : req.body.password
        };
    // 查找数据
    adminsM.find( { user : reqs.user, pass : reqs.pass }, ( err, docs ) => {
        if( err ) {
            // 查找错误时
            // 返回信息和自定义编码 500表示服务器错误
            res.send( { msg : '发生错误', cod : 500 } );
        } else {
            // docs为数组，
            // 当为空时，说明没找到数据，用户名或密码错误
            // 否则找到数据，登陆成功
            // 400 查找错误
            // 201 成功
            if( docs.length === 0 ) {
                res.send( { msg : '用户名或密码错误', cod : 400 } );
            } else {
                let userInfo = {
                    name : reqs.user,
                    age : docs[ 0 ].pass,
                };
                // 把登录数据加入session
                req.session.userInfo = userInfo;
                res.send( { msg : '登陆成功', cod : 201 } );
            }
        }
    } )
} );
// 注册路由
router.route( '/register' ).get( ( req, res ) => {
    // 跳转到注册页
    res.render( 'register', {
        title : '注册'
    } )
} ).post( ( req, res ) => {
    // 注册
    let adminsM = global.mod.getModel( 'admins' ),
        reqs = {
            user : req.body.username,
            pass : req.body.password
        };
    adminsM.find( { user : reqs.user }, ( err, docs ) => {
        if( docs.length !== 0  ) {
            res.send( { msg : '用户名已经注册，请更换用户名重新注册', cod : 400 } )
        } else {
            adminsM.create( {
                user : reqs.user,
                pass : reqs.pass
            }, ( err, docs ) => {
                res.send( { msg : '注册成功', cod : 201 } );
            } )
        }
    } );
});
module.exports = router;
