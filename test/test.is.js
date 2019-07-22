import assert from 'assert';
import { is } from '../is.js';

describe( 'is', function() {

    describe( 'string', function() {
        it( 'should identify strings', function() {
            assert( is.string( 'yee' ) );
            assert( is.string( '' ) );
            assert( is.string( '' + 0 ) );
            assert( !is.string( 0 ) );
            assert( !is.string( true ) );
            assert( !is.string( function() {} ) );
            assert( !is.string( NaN ) );
        } );
    } );

    describe( 'function', function() {
        it( 'should identify functions', function() {
            assert( is.function( async function() {} ) );
            assert( is.function( function() {} ) );
            assert( is.function( Math.sin ) );
            assert( !is.function( 0 ) );
            assert( !is.function( true ) );
            assert( !is.function( {} ) );
        } );
    } );

    describe( 'number', function() {
        it( 'should identify numbers', function() {
            assert( is.number( 0 ) );
            assert( is.number( Infinity ) );
            assert( is.number( NaN ) ); // hmm.
            assert( !is.number( '10' ) );
            assert( !is.number( '0' ) );
            assert( !is.number( {} ) );
        } );
    } );

    describe( 'array', function() {
        it( 'should identify arrays', function() {
            assert( is.array( [] ) );
            assert( !is.array( '10' ) );
            assert( !is.array( '0' ) );
            assert( !is.array( {} ) );
        } );
    } );

    describe( 'object', function() {
        // todo
    } );

    describe( 'boolean', function() {
        // todo
    } );

} );