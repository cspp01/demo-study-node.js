// Mongoose，因为封装了对mongodb文档操作的常用处理方法，让nodejs操作mongodb数据库变的更加容易
let mongoose = require( 'mongoose' );
//添加承诺库,
// 新版要求手动去添加承诺库
// 不加会有警告
mongoose.Promise  = require("bluebird");
mongoose.connect( 'mongodb://127.0.0.1:27017/test', {
    useMongoClient : true
} ).then( db => {
    console.log( '连接成功' );
} );
/* // 旧版本写法，对应上面新写法.then()
db.on( 'open', () => {
    console.log( '连接成功' );
} );*/

