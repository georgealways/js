import assert from 'assert';
import { contains, rangeExclusive } from './utils';
import { random } from '..';

describe( 'random', function() {

    describe( 'value', function() {
        it( 'should return a value between 0 and 1', function() {
            assert( rangeExclusive( random.value(), 0, 1 ) );
        } );
    } );

    describe( 'range', function() {
        it( 'should return a value between min and max', function() {
            assert( rangeExclusive( random.range( 10, 20 ), 10, 20 ) );
        } );
    } );

    describe( 'int', function() {
        it( 'should return an integer', function() {
            assert.equal( random.int( -2, 2 ) % 1, 0 );
        } );
        it( 'should return a value between min and max', function() {
            assert( rangeExclusive( random.int( 1, 4 ), 1, 4 ) );
        } );
        it( 'should never return max when max > min', function() {
            assert.notEqual( random.int( -1, 1 ), 1 );
            assert.notEqual( random.int( 0, 1 ), 1 );
            assert.notEqual( random.int( 0, 2 ), 2 );
            assert.notEqual( random.int( 0, 3 ), 3 );
        } );
    } );

    describe( 'pick', function() {
        it( 'should select a random element', function() {
            const arr = [ 'a', 'b', 'c', 'd', 'e' ];
            const choice = random.pick( arr );
            assert( contains( choice, arr ) );
        } );
    } );

    describe( 'chance', function() {

        it( 'should return a random boolean', function() {

            const val1 = random.chance();
            assert( val1 === true || val1 === false );

            const val2 = random.chance( 0.5 );
            assert( val2 === true || val2 === false );

            assert.equal( random.chance( 0 ), false );
            assert.equal( random.chance( 1 ), true );

        } );

    } );

    describe( 'sign', function() {

        it( 'should return 1 or -1', function() {

            const val1 = random.sign();
            assert( val1 === 1 || val1 === -1 );

            const val2 = random.sign( 0.5 );
            assert( val2 === 1 || val2 === -1 );

            assert.equal( random.sign( 0 ), -1 );
            assert.equal( random.sign( 1 ), 1 );

        } );

    } );

    describe( 'shuffle', function() {

        it( 'should randomize the order of an array', function() {

            const arr = [ 'a', 'b', 'c', 'd', 'e' ];

            const orig = [ ...arr ];

            random.shuffle( arr );

            orig.forEach( val => assert( contains( val, arr ) ) );

        } );

        it( 'should limit the randomization to a range', function() {

            const arr = [ 'A', 'B', 'c', 'd', 'e', 0, 1, 2, 3, 4, 5 ];
            const orig = [ ...arr ];

            random.shuffle( arr, 2, 5 );

            orig.forEach( val => assert( contains( val, arr ) ) );

            assert.equal( arr[ 0 ], 'A' );
            assert.equal( arr[ 1 ], 'B' );

            assert.equal( arr[ 5 ], 0 );
            assert.equal( arr[ 6 ], 1 );
            assert.equal( arr[ 7 ], 2 );
            assert.equal( arr[ 8 ], 3 );
            assert.equal( arr[ 9 ], 4 );

        } );

    } );

} );
