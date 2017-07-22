'use strict';
let Fs = require( 'fs' );
let rs = Fs.createReadStream( 'test.txt', { flags : 'r' } );
// 开始读取事件
rs.on( 'open', () => {
    console.log( '开始读取' );
} );
// 暂停和开始存在的目的是为了防止 写入的速度跟不上读取的速度
rs.pause();
// 读取过程事件
// chunk为每一次读取的内容,默认为16kb
// 读取的内容存在缓冲当中
rs.on( 'data', ( chunk ) => {
    console.log( chunk );
} );
// 10秒后开始读取
// 放在哪里都行
setTimeout(function(){
    rs.resume();
},10000);
// 读取出错事件
rs.on( 'error', ( err ) => {
    console.log( err )
} );
// 读取结束事件
rs.on( 'end', () => {
    console.log( '读取结束' );
} );
// 关闭流事件
rs.on( 'close', () => {
    console.log( '关闭流' );
} );
