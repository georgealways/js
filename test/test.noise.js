import assert from 'assert';
import { rangeInclusive } from './utils';
import { noise, Noise } from '..';

describe( 'noise', function() {

    noiseTest( 'perlin1', 1, 0.15, 0.35 );
    noiseTest( 'perlin2', 2, 0.15, 0.35 );
    noiseTest( 'perlin3', 3, 0.15, 0.35 );

    noiseTest( 'simplex1', 1, 0.5, 0.35 );
    noiseTest( 'simplex2', 2, 0.5, 0.35 );
    noiseTest( 'simplex3', 3, 0.5, 0.35 );

    describe( 'seed', function() {

        it( 'should return predictable values when seeded', function() {

            noise.seed( 2001 );

            // todo: harvest these values without default fbm settings
            noise.octaves = 2;
            noise.persistence = 0.5;
            noise.lacunarity = 2;

            assert.equal( noise.simplex( 0.01 ), 0.5210470435140343 );
            assert.equal( noise.simplex( 0.02 ), 0.5419867836002027 );
            assert.equal( noise.simplex( 0.03 ), 0.5627371511954218 );
            assert.equal( noise.simplex( 0.04 ), 0.5832372650994565 );
            assert.equal( noise.simplex( 0.05 ), 0.6034415121453125 );
            assert.equal( noise.simplex( 0.06 ), 0.6233146796364318 );
            assert.equal( noise.simplex( 0.07 ), 0.6428280330826199 );
            assert.equal( noise.simplex( 0.08 ), 0.6619562371974431 );
            assert.equal( noise.simplex( 0.09 ), 0.6806750230506525 );

        } );
    } );

    describe( 'new', function() {

        it( 'can instantiate multiple rngs with independent seeds', function() {

            noise.seed( 587654 );
            assert.notEqual( noise.simplex( 1.02, 2.02, 3.02 ), new Noise( 9876 ).simplex( 1.02, 2.02, 3.02 ) );

        } );

    } );

} );

function noiseTest( name, dim, rangeSlope, rangeBounds ) {

    const range = 600;
    const step = 0.1;

    const fn = noise[ name ].bind( noise );
    const args = new Array( dim - 1 ).fill( 0 );

    describe( name, function() {

        it( 'should generate noise', function() {

            let prev, min = Infinity, max = -Infinity;

            for ( let i = 0; i < range; i += step ) {

                const val = fn( i, ...args );

                if ( prev !== undefined ) {

                    const delta = val - prev;
                    assert( rangeInclusive( delta, -rangeSlope, rangeSlope ), 'slope: ' + delta );

                }

                assert( rangeInclusive( val, 0, 1 ), `[0,1]: fn(${i}, 0, 0, 4) = ${val}` );

                if ( val < min ) {
                    min = val;
                }

                if ( val > max ) {
                    max = val;
                }

                prev = val;

            }

            assert( rangeInclusive( min, 0, rangeBounds ), 'min: ' + min );
            assert( rangeInclusive( max, 1 - rangeBounds, 1 ), 'max: ' + max );

            const zero = fn( 0, ...args );
            assert( rangeInclusive( zero, 0, 1 ), 'zero: ' + zero );

            const big = fn( 9999999, ...args );
            assert( rangeInclusive( big, 0, 1 ), 'big: ' + big );

            const negative = fn( -9999999, ...args );
            assert( rangeInclusive( negative, 0, 1 ), 'negative: ' + negative );

        } );

    } );

}