/**
 * 
 */
class URL {

    constructor( href ) {

        const h = href.indexOf( '#' );
        const q = href.indexOf( '?' );

        /**
         * 
         */
        this.hash = h === -1 ? undefined : href.substring( h + 1 );

        /**
         * 
         */
        this.strings = {};

        if ( q !== -1 ) {

            const search = h === -1 ? href.substring( q ) : href.substring( q, h );

            search.replace(
                /([^?=&]+)(=([^&]+))?/g,
                ( $0, $1, $2, $3 ) => {
                    this.strings[ $1 ] = $3 === undefined ? undefined : decodeURIComponent( $3 );
                }
            );

        }

    }

    /**
     * 
     * @param {string} name 
     * @param {any} defaultValue 
     */
    boolean( name, defaultValue ) {
        if ( !this.strings.hasOwnProperty( name ) ) {
            return defaultValue;
        }
        return this.strings[ name ] !== 'false';
    }

    /**
     * 
     * @param {string} name 
     * @param {any} defaultValue 
     */
    number( name, defaultValue ) {
        const r = parseFloat( this.strings[ name ] );
        if ( r !== r ) {
            return defaultValue;
        }
        return r;
    }

}

/**
 * 
 */
const url = new URL( typeof window === 'undefined' ? '' : location.href );

export { url, URL };