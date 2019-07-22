/* global dat */

import { Noise } from '..';

const plots = [];

class NoisePlot {

    constructor( noise, func, animate = true ) {

        this.noise = noise;
        this.func = func.bind( noise );

        this.animate = animate;
        this.frequency = 0.01;
        this.time = 0;

        // build canvas

        this.canvas = document.createElement( 'canvas' );
        this.canvas.width = 245;
        this.canvas.height = 245;

        this.ctx = this.canvas.getContext( '2d' );

        // build gui

        this.gui = new dat.GUI( { autoPlace: false } );

        this.gui.add( this, 'animate' );

        const plot = this.plot.bind( this );

        this.gui.add( this.noise, 'octaves', 1, 6, 1 ).onChange( plot );
        this.gui.add( this.noise, 'persistence', 0, 1 ).onChange( plot );
        this.gui.add( this.noise, 'lacunarity', 0, 4 ).onChange( plot );
        this.gui.add( this, 'frequency', 0, 0.15 ).onChange( plot );

        // build dom

        this.domElement = document.createElement( 'span' );
        this.domElement.className = 'plot';

        this.domElement.appendChild( this.canvas );
        this.domElement.appendChild( this.gui.domElement );

        document.body.appendChild( this.domElement );

        plots.push( this );

        if ( !this.animate ) {
            this.plot();
        }

    }

    update() {
        if ( this.animate ) {
            this.plot();
            this.time += 1;
        }
    }

    plot() {}

}

class NoisePlot1D extends NoisePlot {
    plot() {
        const value = this.func( this.time * this.frequency );
        this._plot( 1, '#fff' );
        this._plot( value, '#000' );
    }
    _plot( value, color ) {
        const height = value * this.canvas.height;
        this.ctx.fillStyle = color;
        this.ctx.fillRect( this.time % this.canvas.width, this.canvas.height - height, 1, height );
    }
}

class NoisePlot2D extends NoisePlot {
    plot() {
        for ( let y = 0; y < this.canvas.height; y++ ) {
            const value = this.func( this.time * this.frequency, y * this.frequency );
            this._plot( y, value );
        }
    }
    _plot( y, value ) {
        const v = value * 255;
        this.ctx.fillStyle = `rgb(${v},${v},${v})`;
        this.ctx.fillRect( this.time % this.canvas.width, y, 1, 1 );
    }
}

class NoisePlot3D extends NoisePlot {
    plot() {
        for ( let x = 0; x < this.canvas.width; x++ ) {
            for ( let y = 0; y < this.canvas.height; y++ ) {
                const value = this.func( x * this.frequency, y * this.frequency, this.time * this.frequency );
                this._plot( x, y, value );
            }
        }
    }
    _plot( x, y, value ) {
        const v = value * 255;
        this.ctx.fillStyle = `rgb(${v},${v},${v})`;
        this.ctx.fillRect( x, y, 1, 1 );
    }
}

let noise;

noise = new Noise( 2006 );
new NoisePlot1D( noise, noise.perlin );

noise = new Noise( 2006 );
new NoisePlot1D( noise, noise.simplex );

noise = new Noise( 2006 );
new NoisePlot2D( noise, noise.perlin );

// TODO: why is the contrast here so much higher?
noise = new Noise( 2006 );
new NoisePlot2D( noise, noise.simplex );

noise = new Noise( 2006 );
new NoisePlot3D( noise, noise.perlin, false );

noise = new Noise( 2006 );
new NoisePlot3D( noise, noise.simplex, false );

function update() {
    requestAnimationFrame( update );
    plots.forEach( p => p.update() );
}

update();