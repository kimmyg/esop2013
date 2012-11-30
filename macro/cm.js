macro ccm {
	case test => {
		function( flag, marks ) {
			return marks;
		}
	}
}

macro wcm {
	case ({ $mark:Expr } { $body:Expr }) =>
		function( flag, marks ) {
			


var fac = function( n ) {
	if( n == 0 ) {
		console.log( ccm );
		return 1;
	}
	else {
		return wcm { n }{ n * fac( n - 1 ) }
	}
}
