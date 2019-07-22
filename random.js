import { lerp } from './math.js';

/**
 * 
 */
class Random {

    /**
     * @returns {number}
     */
    value() {
        return Math.random();
    }

    /**
     * 
     * @param {number} min 
     * @param {number} max 
     * @returns {number}
     */
    range( min, max ) {
        return lerp( min, max, this.value() );
    }

    /**
     * 
     * @param {number} min 
     * @param {number} max 
     * @returns {number}
     */
    int( min, max ) {
        return Math.floor( lerp( min, max, this.value() ) );
    }

    /**
     * 
     * @param {Array} arr 
     * @returns {*}
     */
    pick( arr ) {
        return arr[ Math.floor( this.value() * arr.length ) ];
    }

    /**
     * 
     * @param {number} percent 
     * @returns {boolean}
     */
    chance( percent = 0.5 ) {
        return this.value() < percent;
    }

    /**
     * 
     * @param {number} percent 
     * @returns {number}
     */
    sign( percent = 0.5 ) {
        return this.chance( percent ) ? 1 : -1;
    }

    /**
     * 
     * @param {Array} arr 
     * @param {number} [start] 
     * @param {number} [stop] 
     */
    shuffle( arr, start = 0, stop = arr.length ) {
        for ( let i = start; i < stop; i++ ) {
            const r = this.int( start, stop );
            const temp = arr[ i ];
            arr[ i ] = arr[ r ];
            arr[ r ] = temp;
        }
    }

}

/**
 * 
 */
const random = new Random();

export { random, Random };