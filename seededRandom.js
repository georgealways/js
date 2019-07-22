import { Random } from './random.js';

/**
 * https://gist.github.com/blixt/f17b47c62508be59987b#gistcomment-2792771
 * https://gist.github.com/tommyettinger/46a874533244883189143505d203312c
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul#Polyfill
 * 
 * @extends Random
 */
class SeededRandom extends Random {

    /**
     * 
     * @param {number} seed 
     */
    constructor( seed ) {
        super();
        this.seed( seed );
    }

    /**
     * 
     * @param {number} [seed]
     */
    seed( seed = +new Date() ) {
        this._seed = seed;
        this._next = seed;
    }

    value() {
        this._next = this._next + 0x6d2b79f5 | 0;
        let t = imul( this._next ^ this._next >>> 15, 1 | this._next );
        t = t + imul( t ^ t >>> 7, 61 | t ) ^ t;
        t = ( t ^ t >>> 14 ) >>> 0;
        return t / 0xffffffff;
    }

}

const imul = Math.imul || function( a, b ) {
    let r = ( a & 0x003fffff ) * b;
    if ( a & 0xffc00000 ) {
        r += ( a & 0xffc00000 ) * b | 0;
    }
    return r | 0;
};

const seededRandom = new SeededRandom();

export { seededRandom, SeededRandom };