'use strict';
// Mongoose，因为封装了对mongodb文档操作的常用处理方法，让nodejs操作mongodb数据库变的更加容易
let mongoose = require( 'mongoose' );
//添加承诺库,
// 新版要求手动去添加承诺库
mongoose.Promise  = require("bluebird");
mongoose.connect( '4.mongodb://127.0.0.1:27017/test', {
    useMongoClient : true
} ).then( db => {
    console.log( '连接成功' );
    // 定义表结构
    let PS = mongoose.Schema( {
        name : { type : String },
        age : { type : Number, default : 0 }
        // arr : { type : Array }
    } ),
        // 用来操作数据库的
        // * 注意，这里的数据库名必须包含s,如'users','abcs',
        // * 如果写成'user','abc',会默认找或创建users表，abcs表
        // * 所以mongodb数据库表名要加's',不加会找不到表。
        PM = db.model( 'users', PS );
    // 跟新数据
    // 第一个参数为条件，第二个参数为修改值,
    // 只修改一条数据
    PM.update( { name : '123' }, { age : 100 }, ( err, docs ) => {
        console.log( docs );
    } );
    // 加上第三个参数{ multi : true }表示修改所有的数据
    PM.update( { age : 200 }, { age : 500 }, { multi : true }, ( err, docs ) => {
        console.log( docs );
    } )
} );

