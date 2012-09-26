var TRUE = function( x ) {
	return function( f ) {
		return function( m ) {
			return function( y ) {
				return function( f ) {
					return function( m ) {
						return x;
					}
				}
			}
		}
	}
};

var FALSE = function( x ) {
	return function( f ) {
		return function( m ) {
			return function( y ) {
				return function( f ) {
					return function( m ) {
						return y;
					}
				}
			}
		}
	}
};

function listChurchDecode( l ) {
	try {
		l( 'not a function' )( 'f' )( 'm' );

		return [];
	}
	catch( e ) {
		return [ l( TRUE )( 'f' )( 'm' ) ].concat( listChurchDecode( l( FALSE )( 'f' )( 'm' ) ) );
	}
} 

console.log((((function(f11814){return (function(m11815){return ((((((function(f11818){return (function(m11819){return ((((((function(f11822){return (function(m11823){return (function(f){return (function(f11826){return (function(m11827){return ((((((function(f11830){return (function(m11831){return (function(x){return (function(f11834){return (function(m11835){return ((((((function(f11838){return (function(m11839){return f;});})((function(x){return (function(y){return y;});})))(m11835))((((function(f11842){return (function(m11843){return (function(v){return (function(f11846){return (function(m11847){return ((((((function(f11850){return (function(m11851){return ((((((function(f11854){return (function(m11855){return x;});})((function(x){return (function(y){return y;});})))(m11851))((((function(f11858){return (function(m11859){return x;});})((function(x){return (function(y){return y;});})))(m11851))))(f11850))(m11851));});})((function(x){return (function(y){return y;});})))(m11847))((((function(f11862){return (function(m11863){return v;});})((function(x){return (function(y){return y;});})))(m11847))))(f11846))(m11847));});});});});})((function(x){return (function(y){return y;});})))(m11835))))(f11834))(m11835));});});});});})((function(x){return (function(y){return y;});})))(m11827))((((function(f11866){return (function(m11867){return (function(x){return (function(f11870){return (function(m11871){return ((((((function(f11874){return (function(m11875){return f;});})((function(x){return (function(y){return y;});})))(m11871))((((function(f11878){return (function(m11879){return (function(v){return (function(f11882){return (function(m11883){return ((((((function(f11886){return (function(m11887){return ((((((function(f11890){return (function(m11891){return x;});})((function(x){return (function(y){return y;});})))(m11887))((((function(f11894){return (function(m11895){return x;});})((function(x){return (function(y){return y;});})))(m11887))))(f11886))(m11887));});})((function(x){return (function(y){return y;});})))(m11883))((((function(f11898){return (function(m11899){return v;});})((function(x){return (function(y){return y;});})))(m11883))))(f11882))(m11883));});});});});})((function(x){return (function(y){return y;});})))(m11871))))(f11870))(m11871));});});});});})((function(x){return (function(y){return y;});})))(m11827))))(f11826))(m11827));});});});});})((function(x){return (function(y){return y;});})))(m11819))((((function(f11902){return (function(m11903){return (function(f){return (function(f11906){return (function(m11907){return (function(n){return (function(f11910){return (function(m11911){return ((((((function(f11914){return (function(m11915){return (((((function(f11918){return (function(m11919){return n;});})((function(x){return (function(y){return y;});})))(m11915))===0)?(((function(f11922){return (function(m11923){return (function(z){return (function(f11926){return (function(m11927){return (function(){console.log(listChurchDecode((((function(f11930){return (function(m11931){return ((m11931((function(z){return z;})))((function(z){return z;})));});})((function(x){return (function(y){return y;});})))(m11927))));return (((function(f11934){return (function(m11935){return 1;});})(f11926))(m11927));})();});});});});})(f11914))(m11915)):(((function(f11938){return (function(m11939){return (function(z){return (function(f11942){return (function(m11943){return (((function(f11946){return (function(m11947){return ((((function(f11950){return (function(m11951){return n;});})((function(x){return (function(y){return y;});})))(m11947))*(((function(f11954){return (function(m11955){return ((((((function(f11958){return (function(m11959){return f;});})((function(x){return (function(y){return y;});})))(m11955))((((function(f11962){return (function(m11963){return ((((function(f11966){return (function(m11967){return n;});})((function(x){return (function(y){return y;});})))(m11963))-1);});})((function(x){return (function(y){return y;});})))(m11955))))(f11954))(m11955));});})((function(x){return (function(y){return y;});})))(m11947)));});})((function(x){return (function(y){return x;});})))((((function(a11944){return (function(b11945){return (function(f11970){return (function(m11971){return (function(z){return (function(f11974){return (function(m11975){return ((((((function(f11978){return (function(m11979){return ((((((function(f11982){return (function(m11983){return z;});})((function(x){return (function(y){return y;});})))(m11979))((((function(f11986){return (function(m11987){return a11944;});})((function(x){return (function(y){return y;});})))(m11979))))(f11978))(m11979));});})((function(x){return (function(y){return y;});})))(m11975))((((function(f11990){return (function(m11991){return b11945;});})((function(x){return (function(y){return y;});})))(m11975))))(f11974))(m11975));});});});});});});})((((function(f11994){return (function(m11995){return n;});})((function(x){return (function(y){return y;});})))(m11943))))(((f11942((((((m11943((function(z){return z;})))((function(z){return z;})))((function(x){return (function(f11942){return (function(m11943){return (function(y){return (function(f11942){return (function(m11943){return y;});});});});});})))((function(z){return z;})))((function(z){return z;})))))(((m11943((function(z){return z;})))((function(z){return z;})))))))));});});});});})(f11914))(m11915)));});})((function(x){return (function(y){return y;});})))(m11911))((((function(f11998){return (function(m11999){return 0;});})((function(x){return (function(y){return y;});})))(m11911))))(f11910))(m11911));});});});});});});});})((function(x){return (function(y){return y;});})))(m11819))))(f11818))(m11819));});})((function(x){return (function(y){return y;});})))(m11815))((((function(f12002){return (function(m12003){return 5;});})((function(x){return (function(y){return y;});})))(m11815))))(f11814))(m11815));});})((function(x){return (function(y){return y;});})))((function(f12008){return (function(m12009){return (function(x){return (function(f12012){return (function(m12013){return (function(y){return (function(f12016){return (function(m12017){return y;});});});});});});});}))))
