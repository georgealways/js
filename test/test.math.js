import assert from 'assert';
import {
    is,
    map,
    lerp,
    normalize,
    cmap,
    clerp,
    cnormalize,
    clamp,
    clamp01,
    dist,
    dist2,
    deg2rad,
    rad2deg,
    wrap
} from '..';

describe( 'math',
    function() {

        describe( 'map',
            function() {
                it( 'should map values', function() {
                    assert.equal( map( 2, 1, 3, 3, 5 ), 4 );
                } );
                it( 'should return min when range == 0', function() {
                    assert.equal( map( 5, 2, 2, -1, 1 ), -1 );
                } );
                it( 'should not clamp values', function() {
                    assert.equal( map( 2, 0, 1, 50, 100 ), 150 );
                } );
            } );

        describe( 'lerp', function() {
            it( 'should lerp values', function() {
                assert.equal( lerp( 0, 10, 0.5 ), 5 );
                assert.equal( lerp( 0, -10, 1 ), -10 );
            } );
            it( 'should return a when a == b', function() {
                assert.equal( lerp( 6, 6, 1 ), 6 );
            } );
            it( 'should not clamp values', function() {
                assert.equal( lerp( 0, 1, 2 ), 2 );
            } );
        } );

        describe( 'normalize', function() {
            it( 'should normalize values', function() {
                assert.equal( normalize( 1, 3, 2 ), 0.5 );
            } );
            it( 'should return Infinity when a == b && v > a', function() {
                assert.equal( normalize( 10, 10, 20 ), Infinity );
            } );
            it( 'should return -Infinity when a == b && v < a', function() {
                assert.equal( normalize( 10, 10, 0 ), -Infinity );
            } );
        } );

        describe( 'cmap', function() {
        // todo
        } );

        describe( 'clerp', function() {
        // todo
        } );

        describe( 'cnormalize', function() {
        // todo
        } );

        describe( 'clamp', function() {
            it( 'should clamp values', function() {
                assert.equal( clamp( 20, -1, 1 ), 1 );
                assert.equal( clamp( 7, -2, -2 ), -2 );
                assert.equal( clamp( 0, -1, 1 ), 0 );
                assert.equal( clamp( Infinity, -1, 19 ), 19 );
                assert.equal( clamp( Infinity, -1, Infinity ), Infinity );
            } );
            it( 'should sort bounds for you', function() {
                assert.equal( clamp( 50, 1, -1 ), 1 );
            } );
        } );

        describe( 'clamp01', function() {
            it( 'should clamp values', function() {
                assert.equal( clamp01( 20 ), 1 );
                assert.equal( clamp01( -1 ), 0 );
                assert.equal( clamp01( Infinity ), 1 );
            } );
        } );

        describe( 'dist', function() {
            it( 'should exist', function() {
            // todo
                assert( is.function( dist ) );
            } );
        } );

        describe( 'dist2', function() {
            it( 'should exist', function() {
            // todo
                assert( is.function( dist2 ) );
            } );
        } );

        describe( 'deg2rad', function() {
            it( 'should exist', function() {
            // todo
                assert( is.function( deg2rad ) );
            } );
        } );

        describe( 'rad2deg', function() {
            it( 'should exist', function() {
            // todo
                assert( is.function( rad2deg ) );
            } );
        } );

        describe( 'wrap', function() {
            it( 'should modulo negative numbers', function() {
                assert.equal( wrap( 5, 2 ), 1 );
                assert.equal( wrap( -5, 2 ), 1 );
                assert.equal( wrap( -105, 2 ), 1 );
                assert.equal( wrap( 105, 2 ), 1 );
                assert.equal( wrap( 5, 3 ), 2 );
                assert.equal( wrap( 100000000000.25, 1 ), 0.25 );
                assert.equal( wrap( -0.25, 1 ), 0.75 );
                assert.equal( wrap( -1000000000.25, 1 ), 0.75 );
            } );
        } );

    } );