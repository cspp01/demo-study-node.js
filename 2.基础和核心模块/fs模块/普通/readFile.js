let Read = require( '2.基础和核心模块/fs模块/readFile' );
// console.log( Read );
Read.readFile( 'test.txt', 'utf-8', ( err, data ) => {
    console.log( data ); // -> 12321312312
} );