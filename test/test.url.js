import assert from 'assert';
import { URL } from '../url.js';

describe( 'URL', function() {

    describe( 'hash', function() {

        it( 'should return the hash', function() {

            let url;

            url = new URL( 'https://test.com/#george' );
            assert.equal( url.hash, 'george' );

            url = new URL( 'https://test.com/#' );
            assert.equal( url.hash, '' );

            url = new URL( 'https://test.com/' );
            assert.equal( url.hash, undefined );

        } );

    } );

    describe( 'strings', function() {

        it( 'should contain strings', function() {

            let url;

            url = new URL( 'https://test.com/?foo=bar#hashtoo' );
            assert.deepStrictEqual( url.strings, { foo: 'bar' } );

            url = new URL( 'https://test.com/?foo&bar=10#hashtoo' );
            assert.deepStrictEqual( url.strings, { foo: undefined, bar: '10' } );

            url = new URL( 'https://test.com/?foo#hashtoo' );
            assert.deepStrictEqual( url.strings, { foo: undefined } );

            url = new URL( 'https://test.com/#hashtoo' );
            assert.deepStrictEqual( url.strings, {} );

            url = new URL( 'https://test.com/?really=undefined' );
            assert.deepStrictEqual( url.strings, { really: 'undefined' } );

            url = new URL( 'https://test.com/?really' );
            assert.deepStrictEqual( url.strings, { really: undefined } );

            url = new URL( 'https://test.com/?undefined=wow' );
            assert.deepStrictEqual( url.strings, { 'undefined': 'wow' } );

            url = new URL( 'https://test.com/#hashtoo' );
            assert.deepStrictEqual( url.strings, {} );

            url = new URL( 'https://test.com/?' );
            assert.deepStrictEqual( url.strings, {} );

        } );

    } );

    describe( 'number', function() {

        it( 'should return numbers', function() {

            let url;

            url = new URL( 'https://test.com/?baz=20.0#hashtoo' );
            assert.equal( url.number( 'baz' ), 20 );

            url = new URL( 'https://test.com/?baz=-5' );
            assert.equal( url.number( 'baz', -1 ), -5 );

            url = new URL( 'https://test.com/' );
            assert.equal( url.number( 'baz', -21 ), -21 );

            url = new URL( 'https://test.com/?baz#hashtoo' );
            assert.equal( url.number( 'baz', -1 ), -1 );

        } );

    } );

    describe( 'boolean', function() {

        it( 'should return booleans', function() {

            let url;

            url = new URL( 'https://test.com/?bar' );
            assert( url.boolean( 'bar' ) );

            url = new URL( 'https://test.com/' );
            assert.equal( url.boolean( 'bar' ), undefined );

            url = new URL( 'https://test.com/?bar=false' );
            assert.equal( url.boolean( 'bar', true ), false );

        } );

    } );

} );