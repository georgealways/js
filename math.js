/**
 * 
 * @param {*} t 
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 * @param {*} d 
 */
export const map = ( t, a, b, c, d ) => a === b ? c : c + ( d - c ) * ( t - a ) / ( b - a );

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} t 
 */
export const lerp = ( a, b, t ) => ( b - a ) * t + a;

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} v 
 */
export const normalize = ( a, b, v ) => ( v - a ) / ( b - a );

/**
 * 
 * @param {*} t 
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 * @param {*} d 
 */
export const cmap = ( t, a, b, c, d ) => map( clamp( t, a, b ), a, b, c, d );

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} t 
 */
export const clerp = ( a, b, t ) => lerp( a, b, clamp01( t ) );

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} v 
 */
export const cnormalize = ( a, b, v ) => normalize( a, b, clamp( v, a, b ) );

/**
 * 
 * @param {*} v 
 * @param {*} a 
 * @param {*} b 
 */
export const clamp = ( v, a, b ) => Math.max( Math.min( a, b ), Math.min( Math.max( a, b ), v ) );

/**
 * 
 * @param {*} v 
 */
export const clamp01 = v => Math.max( 0, Math.min( 1, v ) );

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 * @param {*} d 
 */
export const dist = ( a, b, c, d ) => Math.sqrt( dist2( a, b, c, d ) );

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 * @param {*} d 
 */
export const dist2 = ( a, b, c, d ) => ( c - a ) * ( c - a ) + ( d - b ) * ( d - b );

/**
 * 
 * @param {*} d 
 */
export const deg2rad = d => d * Math.PI / 180;

/**
 * 
 * @param {*} r 
 */
export const rad2deg = r => r * 180 / Math.PI;

/**
 * 
 * @param {*} v 
 * @param {*} r 
 */
export const wrap = ( v, r ) => ( v %= r, v + Math.ceil( Math.max( 0, -v ) / r ) * r );