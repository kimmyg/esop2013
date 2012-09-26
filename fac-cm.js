var TRUE = function( x ) {
	return function( y ) {
		return x;
	}
};

var FALSE = function( x ) {
	return function( y ) {
		return y;
	}
};

function listChuchDecode( l ) {
	if( l( 0 )( 'false' ) === 'false' ) {
		return [];
	}
	else {
		return [ l( TRUE ) ].concat( l( FALSE ) );
	}
} 
