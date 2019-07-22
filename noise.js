import { lerp } from './math.js';
import { SeededRandom } from './seededRandom.js';

/**
 * Generator for Perlin and Simplex gradient noise functions. Computes 
 * single-octave or fractal noise values in the range of [0,1].
 */
class Noise {

    /**
     * TODO.
     * 
     * @param {number} seed 
     */
    constructor( seed ) {

        /**
         * TODO.
         */
        this.octaves = 2;

        /**
         * TODO.
         */
        this.persistence = 0.5;

        /**
         * TODO.
         */
        this.lacunarity = 2;

        this._p = new Uint8Array( 512 );

        this._rng = new SeededRandom( seed );
        this._seed();

    }

    _seed() {

        for ( let i = 0; i < 256; i++ ) {
            this._p[ i ] = i;
        }

        this._rng.shuffle( this._p, 0, 256 );

        for ( let i = 0; i < 256; i++ ) {
            this._p[ i + 256 ] = this._p[ i ];
        }

    }

    /**
     * TODO.
     * 
     * @param {number} seed 
     */
    seed( seed ) {

        this._rng.seed( seed );
        this._seed();

    }

    /**
     * TODO.
     * 
     * @param {number} x 
     * @param {number} [y] 
     * @param {number} [z] 
     * @returns {number} Noise value from [0,1].
     */
    perlin( x, y, z ) {

        const dim = arguments.length;

        let value = 0;
        let max = 0;
        let amplitude = 1;

        for ( let i = 0; i < this.octaves; i++ ) {
            switch ( dim ) {
                case 1:
                    value += amplitude * this.perlin1( x );
                    break;
                case 2:
                    value += amplitude * this.perlin2( x, y );
                    break;
                default:
                    value += amplitude * this.perlin3( x, y, z );
                    break;
            }
            max += amplitude;
            amplitude *= this.persistence;
            x *= this.lacunarity;
            y *= this.lacunarity;
            z *= this.lacunarity;
        }

        return value / max;

    }


    /**
     * TODO.
     * 
     * @param {number} x 
     * @param {number} [y] 
     * @param {number} [z] 
     * @returns {number} Noise value from [0,1].
     */
    simplex( x, y, z ) {

        const dim = arguments.length;

        let value = 0;
        let max = 0;
        let amplitude = 1;

        for ( let i = 0; i < this.octaves; i++ ) {
            switch ( dim ) {
                case 1:
                    value += amplitude * this.simplex1( x );
                    break;
                case 2:
                    value += amplitude * this.simplex2( x, y );
                    break;
                default:
                    value += amplitude * this.simplex3( x, y, z );
                    break;
            }
            max += amplitude;
            amplitude *= this.persistence;
            x *= this.lacunarity;
            y *= this.lacunarity;
            z *= this.lacunarity;
        }

        return value / max;

    }

    /**
     * TODO.
     * 
     * @param {number} x 
     * @returns {number} Noise value from [0,1].
     */
    perlin1( x ) {

        const fx = Math.floor( x );

        const X = fx & 255;

        x -= fx;

        const u = fade( x );

        return 0.5 + lerp(
            grad1( this._p[ X ], x ),
            grad1( this._p[ X + 1 ], x - 1 ),
            u );

    }

    /**
     * 
     * @param {*} x 
     * @param {*} y 
     * @returns {number} Noise value from [0,1].
     */
    perlin2( x, y ) {

        const fx = Math.floor( x );
        const fy = Math.floor( y );

        const X = fx & 255;
        const Y = fy & 255;

        x -= fx;
        y -= fy;

        const u = fade( x );
        const v = fade( y );

        const A = this._p[ X ] + Y;
        const B = this._p[ X + 1 ] + Y;

        return 0.5 + 0.5 * lerp(
            lerp(
                grad2( this._p[ A ], x, y ),
                grad2( this._p[ B ], x - 1, y ),
                u ),
            lerp(
                grad2( this._p[ A + 1 ], x, y - 1 ),
                grad2( this._p[ B + 1 ], x - 1, y - 1 ),
                u ),
            v );
    }

    /**
     * 
     * @param {*} x 
     * @param {*} y 
     * @param {*} z 
     * @returns {number} Noise value from [0,1].
     */
    perlin3( x, y, z ) {

        const fx = Math.floor( x );
        const fy = Math.floor( y );
        const fz = Math.floor( z );

        const X = fx & 255;
        const Y = fy & 255;
        const Z = fz & 255;

        x -= fx;
        y -= fy;
        z -= fz;

        const u = fade( x );
        const v = fade( y );
        const w = fade( z );

        const A  = this._p[ X ] + Y;
        const B  = this._p[ X + 1 ] + Y;
        const AA = this._p[ A ] + Z;
        const BA = this._p[ B ] + Z;
        const AB = this._p[ A + 1 ] + Z;
        const BB = this._p[ B + 1 ] + Z;

        return 0.5 + 0.5 * lerp(
            lerp(
                lerp(
                    grad3( this._p[ AA ], x, y, z ),
                    grad3( this._p[ BA ], x - 1, y, z ),
                    u ),
                lerp(
                    grad3( this._p[ AB ], x, y - 1, z ),
                    grad3( this._p[ BB ], x - 1, y - 1, z ),
                    u ),
                v ),
            lerp(
                lerp(
                    grad3( this._p[ AA + 1 ], x, y, z - 1 ),
                    grad3( this._p[ BA + 1 ], x - 1, y, z - 1 ),
                    u ),
                lerp(
                    grad3( this._p[ AB + 1 ], x, y - 1, z - 1 ),
                    grad3( this._p[ BB + 1 ], x - 1, y - 1, z - 1 ),
                    u ),
                v ),
            w );

    }

    /**
     * 
     * @param {*} x 
     * @returns {number} Noise value from [0,1].
     */
    simplex1( x ) {

        const i0 = Math.floor( x );
        const i1 = i0 + 1;

        const x0 = x - i0;
        const x1 = x0 - 1;

        let t0 = 1 - x0 * x0;
        t0 *= t0;
        const n0 = t0 * t0 * grad1( this._p[ i0 & 255 ], x0 );

        let t1 = 1 - x1 * x1;
        t1 *= t1;
        const n1 = t1 * t1 * grad1( this._p[ i1 & 255 ], x1 );

        return 0.5 + 1.58 * ( n0 + n1 );

    }

    /**
     * 
     * @param {*} x 
     * @param {*} y 
     * @returns {number} Noise value from [0,1].
     */
    simplex2( x, y ) {

        let n0, n1, n2;

        const s = ( x + y ) * F2;
        const i = Math.floor( x + s );
        const j = Math.floor( y + s );
        const t = ( i + j ) * G2;
        const X0 = i - t;
        const Y0 = j - t;
        const x0 = x - X0;
        const y0 = y - Y0;

        let i1, j1;
        if ( x0 > y0 ) {
            i1 = 1; j1 = 0;
        } else {
            i1 = 0; j1 = 1;
        }

        const x1 = x0 - i1 + G2;
        const y1 = y0 - j1 + G2;
        const x2 = x0 - 1 + 2 * G2;
        const y2 = y0 - 1 + 2 * G2;

        const ii = i & 255;
        const jj = j & 255;
        const gi0 = this._p[ ii + this._p[ jj ] ];
        const gi1 = this._p[ ii + i1 + this._p[ jj + j1 ] ];
        const gi2 = this._p[ ii + 1 + this._p[ jj + 1 ] ];

        let t0 = 0.5 - x0 * x0 - y0 * y0;
        if ( t0 < 0 ) {
            n0 = 0;
        } else {
            t0 *= t0;
            n0 = t0 * t0 * grad2( gi0, x0, y0 );
        }

        let t1 = 0.5 - x1 * x1 - y1 * y1;
        if ( t1 < 0 ) {
            n1 = 0;
        } else {
            t1 *= t1;
            n1 = t1 * t1 * grad2( gi1, x1, y1 );
        }

        let t2 = 0.5 - x2 * x2 - y2 * y2;
        if ( t2 < 0 ) {
            n2 = 0;
        } else {
            t2 *= t2;
            n2 = t2 * t2 * grad2( gi2, x2, y2 );
        }

        return 0.5 + 35 * ( n0 + n1 + n2 );

    }

    /**
     * 
     * @param {*} x 
     * @param {*} y 
     * @param {*} z 
     * @returns {number} Noise value from [0,1].
     */
    simplex3( x, y, z ) {

        let n0, n1, n2, n3;

        const s = ( x + y + z ) * F3;

        const i = Math.floor( x + s );
        const j = Math.floor( y + s );
        const k = Math.floor( z + s );

        const t = ( i + j + k ) * G3;

        const X0 = i - t;
        const Y0 = j - t;
        const Z0 = k - t;

        const x0 = x - X0;
        const y0 = y - Y0;
        const z0 = z - Z0;

        let i1, j1, k1;
        let i2, j2, k2;

        if ( x0 >= y0 ) {
            if ( y0 >= z0 ) {
                i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0;
            } else if ( x0 >= z0 ) {
                i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1;
            } else {
                i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1;
            }
        } else {
            if ( y0 < z0 ) {
                i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1;
            } else if ( x0 < z0 ) {
                i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1;
            } else {
                i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0;
            }
        }

        const x1 = x0 - i1 + G3;
        const y1 = y0 - j1 + G3;
        const z1 = z0 - k1 + G3;
        const x2 = x0 - i2 + 2 * G3;
        const y2 = y0 - j2 + 2 * G3;
        const z2 = z0 - k2 + 2 * G3;
        const x3 = x0 - 1 + 3 * G3;
        const y3 = y0 - 1 + 3 * G3;
        const z3 = z0 - 1 + 3 * G3;

        const ii = i & 255;
        const jj = j & 255;
        const kk = k & 255;
        const gi0 = this._p[ ii + this._p[ jj + this._p[ kk ] ] ];
        const gi1 = this._p[ ii + i1 + this._p[ jj + j1 + this._p[ kk + k1 ] ] ];
        const gi2 = this._p[ ii + i2 + this._p[ jj + j2 + this._p[ kk + k2 ] ] ];
        const gi3 = this._p[ ii + 1 + this._p[ jj + 1 + this._p[ kk + 1 ] ] ];

        let t0 = 0.5 - x0 * x0 - y0 * y0 - z0 * z0;
        if ( t0 < 0 ) {
            n0 = 0;
        } else {
            t0 *= t0;
            n0 = t0 * t0 * grad3( gi0, x0, y0, z0 );
        }

        let t1 = 0.5 - x1 * x1 - y1 * y1 - z1 * z1;
        if ( t1 < 0 ) {
            n1 = 0;
        } else {
            t1 *= t1;
            n1 = t1 * t1 * grad3( gi1, x1, y1, z1 );
        }

        let t2 = 0.5 - x2 * x2 - y2 * y2 - z2 * z2;
        if ( t2 < 0 ) {
            n2 = 0;
        } else {
            t2 *= t2;
            n2 = t2 * t2 * grad3( gi2, x2, y2, z2 );
        }

        let t3 = 0.5 - x3 * x3 - y3 * y3 - z3 * z3;
        if ( t3 < 0 ) {
            n3 = 0;
        } else {
            t3 *= t3;
            n3 = t3 * t3 * grad3( gi3, x3, y3, z3 );
        }

        return 0.5 + 16 * ( n0 + n1 + n2 + n3 );

    }

}

function grad1( hash, x ) {
    return hash & 1 ? -x : x;
}

function grad2( hash, x, y ) {
    switch ( hash & 3 ) {
        case 0: return  x + y;
        case 1: return -x + y;
        case 2: return  x - y;
        case 3: return -x - y;
    }
}

function grad3( hash, x, y, z ) {
    switch ( hash & 15 ) {
        case 0: return  x + y;
        case 1: return -x + y;
        case 2: return  x - y;
        case 3: return -x - y;
        case 4: return  x + z;
        case 5: return -x + z;
        case 6: return  x - z;
        case 7: return -x - z;
        case 8: return  y + z;
        case 9: return -y + z;
        case 10: return  y - z;
        case 11: return -y - z;
        case 12: return  y + x;
        case 13: return -y + z;
        case 14: return  y - x;
        case 15: return -y - z;
    }
}

// constants for simplex noise
const F3 = 1 / 3;
const G3 = 1 / 6;
const F2 = ( Math.sqrt( 3 ) - 1 ) / 2;
const G2 = ( 3 - Math.sqrt( 3 ) ) / 6;

const fade = t => t * t * t * ( t * ( t * 6 - 15 ) + 10 );

/**
 * Shared static instance of Noise. Seeded with +new Date() on load.
 */
const noise = new Noise();

// Implementation references:
// https://github.com/keijiro/PerlinNoise
// http://webstaff.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf
// http://riven8192.blogspot.com/2010/08/calculate-perlinnoise-twice-as-fast.html
// https://gist.github.com/Fataho/5b422037a6fdcb21c9134ef34d2fa79a#file-perlinnoise2d-java-L60

export { noise, Noise };