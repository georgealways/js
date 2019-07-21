import { lerp } from './math.js';

export class Random {

    value() {
        return Math.random();
    }

    range( min, max ) {
        return lerp( min, max, this.value() );
    }

    int( min, max ) {
        return Math.floor( lerp( min, max, this.value() ) );
    }

    pick( arr ) {
        return arr[ Math.floor( this.value() * arr.length ) ];
    }

    chance( percent = 0.5 ) {
        return this.value() < percent;
    }

    sign( percent = 0.5 ) {
        return this.chance( percent ) ? 1 : -1;
    }

    shuffle( arr, start = 0, stop = arr.length ) {
        for ( let i = start; i < stop; i++ ) {
            const r = this.int( start, stop );
            const temp = arr[ i ];
            arr[ i ] = arr[ r ];
            arr[ r ] = temp;
        }
    }

}

export default new Random();