import assert from 'assert';
import { Shuffler } from '..';
import { SeededRandom } from '..';

describe( 'Shuffler', function() {

    describe( 'next', function() {

        it( 'should return every value before repeating a value', function() {

            const arr = [ 'a', 'b', 'c' ];

            const shuffler = new Shuffler( arr );
            const iterations = 10;

            for ( let cur, prev, i = 0; i < arr.length * iterations; i++ ) {

                prev = cur;
                cur = shuffler.next();

                assert.notEqual( prev, cur );

            }

        } );

    } );

    describe( 'new', function() {

        it( 'can be seeded with a custom rng', function() {

            const rng = new SeededRandom( 1999 );
            const arr = [ 'a', 'b', 'c', 'd', 'e' ];
            const shuffler = new Shuffler( arr, rng );

            assert.equal( shuffler.next(), 'c' );
            assert.equal( shuffler.next(), 'a' );
            assert.equal( shuffler.next(), 'd' );
            assert.equal( shuffler.next(), 'e' );
            assert.equal( shuffler.next(), 'b' );
            assert.equal( shuffler.next(), 'a' );
            assert.equal( shuffler.next(), 'c' );
            assert.equal( shuffler.next(), 'd' );
            assert.equal( shuffler.next(), 'e' );
            assert.equal( shuffler.next(), 'b' );

        } );

    } );

} );