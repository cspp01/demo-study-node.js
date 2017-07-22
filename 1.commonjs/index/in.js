// commonjs是一种Javascript的包管理规范
// Commonjs、AMD以及曾经很火的CMD都只是为了解决javascript文件之间的依赖与引用问题，
// 所以它们只是一种Javascript的包管理规范。
// 在组织你的js代码时，你完全可以根据自己的喜好，选择合适的包管理规范，
// 但要注意，尽可能只选择一种。

// 所有代码运行在模块作用域中，不会污染全局。
// 模块作用域默认已经写好，不需要自己写，默认不会显示
// 所以可以直接写自己的代码
// ( function( module, exports, require, __filename, __dirname ){
    let a = require( './module/module1.js' );
    console.log( a.a );
// } )();
