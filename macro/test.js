/*macro ccm {
	case () => {
		function( flag, marks ) {
			return marks;
		}
	}
}

macro wcm {
	case ( $mark:Expr, $body:Expr ) => {
		$body
	}
}

macro def {
	case $name:ident ( $x:ident (,) ... ) { $body:SourceElements } => {
		function $name( $x (,) ..., flag, marks ) {
			$body
		}
	}
}

macro fun {
	case ( $x:ident (,) ... ) { $body:SourceElements } => {
		function( $x (,) ..., flag, marks ) {
			$body
		}
	}
}
*/

macro iffy {
	case ($body:Program) => {
		$body
	}
}

iffy (function(n){return n;})

/*def fac( n ) {
	return 1;
}
/*
	if( n == 0 ) {
		//console.log( ccm() );
		return 1;
	}
	else {
		return 1;
		//return wcm { n, n * fac( n - 1 ) }
	}
}
*/
