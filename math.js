/**
 * 
 * @param {number} t 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @param {number} d 
 * @returns {number}
 */
export const map = ( t, a, b, c, d ) => a === b ? c : c + ( d - c ) * ( t - a ) / ( b - a );

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} t 
 * @returns {number}
 */
export const lerp = ( a, b, t ) => ( b - a ) * t + a;

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} v 
 * @returns {number}
 */
export const normalize = ( a, b, v ) => ( v - a ) / ( b - a );

/**
 * 
 * @param {number} t 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @param {number} d 
 * @returns {number}
 */
export const cmap = ( t, a, b, c, d ) => map( clamp( t, a, b ), a, b, c, d );

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} t 
 * @returns {number}
 */
export const clerp = ( a, b, t ) => lerp( a, b, clamp01( t ) );

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} v 
 * @returns {number}
 */
export const cnormalize = ( a, b, v ) => normalize( a, b, clamp( v, a, b ) );

/**
 * 
 * @param {number} v 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export const clamp = ( v, a, b ) => Math.max( Math.min( a, b ), Math.min( Math.max( a, b ), v ) );

/**
 * 
 * @param {number} v 
 * @returns {number}
 */
export const clamp01 = v => Math.max( 0, Math.min( 1, v ) );

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @param {number} d 
 * @returns {number}
 */
export const dist = ( a, b, c, d ) => Math.sqrt( dist2( a, b, c, d ) );

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @param {number} d 
 * @returns {number}
 */
export const dist2 = ( a, b, c, d ) => ( c - a ) * ( c - a ) + ( d - b ) * ( d - b );

/**
 * 
 * @param {number} d 
 * @returns {number}
 */
export const deg2rad = d => d * Math.PI / 180;

/**
 * 
 * @param {number} r 
 * @returns {number}
 */
export const rad2deg = r => r * 180 / Math.PI;

/**
 * 
 * @param {number} v 
 * @param {number} r 
 * @returns {number}
 */
export const wrap = ( v, r ) => ( v %= r, v + Math.ceil( Math.max( 0, -v ) / r ) * r );