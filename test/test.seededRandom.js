import assert from 'assert';
import { rangeExclusive } from './utils';
import { seededRandom, SeededRandom } from '..';

describe( 'seededRandom', function() {

    describe( 'value', function() {
        it( 'should return a value between 0 and 1', function() {
            assert( rangeExclusive( seededRandom.value(), 0, 1 ) );
        } );
    } );

    describe( 'seed', function() {
        it( 'should return predictable values when seeded', function() {
            seededRandom.seed( 0 );
            assert.equal( seededRandom.value(), 0.2664292087467455 );
            assert.equal( seededRandom.value(), 0.0003297457006596368 );
            assert.equal( seededRandom.value(), 0.2232720274998043 );
            seededRandom.seed( 12151988 );
            assert.equal( seededRandom.value(), 0.8069434491467996 );
            assert.equal( seededRandom.value(), 0.5078268818342655 );
            assert.equal( seededRandom.value(), 0.689609854409846 );
            seededRandom.seed( 999 );
            assert.equal( seededRandom.value(), 0.9699058225308326 );
            assert.equal( seededRandom.value(), 0.6347794098860536 );
            assert.equal( seededRandom.value(), 0.3093319070314364 );
        } );
    } );

    describe( 'new', function() {
        it( 'can instantiate multiple rngs with independent seeds', function() {
            const rng1 = new SeededRandom( 0 );
            const rng2 = new SeededRandom( 1 );
            seededRandom.seed( 2 );
            assert.equal( rng1.value(), 0.2664292087467455 );
            assert.equal( rng2.value(), 0.6270739407341633 );
            assert.equal( seededRandom.value(), 0.7342509445115577 );
        } );
    } );

} );