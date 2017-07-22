let Write = require( 'fs' ),
    la = '[\
        {\
            "a" : "123"\
        }\
    ]';
// 存在文件会覆盖内容
// 不存在会新建文件
Write.writeFile( 'testW.json', la, 'utf-8', ( e ) => {
    console.log( e );
} );