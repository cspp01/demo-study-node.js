let mongoose = require( 'mongoose' ),
    sc = require( './scheam' );

for( let i in sc ) {
    mongoose.model( i, mongoose.Schema( sc[ i ] ) );
}
module.exports = {
    getModel : _getModel
};
function _getModel( type ) {
    return mongoose.model( type )
}
