let Fs = require( 'fs' );
Fs.readFile( 'test.txt', 'utf-8', ( err, data ) => {
    if( err ){
        console.log( err );
    } else {
        Fs.writeFile( '新建test.txt', data, 'utf-8', ( e ) => {
            console.log( '写入文件成功' )
        } )
    }
} )