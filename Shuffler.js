import random from './random.js';

export default class Shuffler {

    constructor( arr, rng ) {
        this.arr = arr;
        this.rng = rng || random;
        this._reset();
    }

    next() {
        if ( this.index >= this.arr.length ) {
            this._reset();
        }
        this.cur = this.arr[ this.index ];
        this.index++;
        return this.cur;
    }

    _reset() {
        this.rng.shuffle( this.arr );
        if ( this.arr[ 0 ] === this.cur ) {
            this.arr.push( this.arr.shift() );
        }
        this.index = 0;
    }

}