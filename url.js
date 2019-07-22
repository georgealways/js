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
     * @param {boolean} [defaultValue]
     * @returns {boolean}
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
     * @param {number} [defaultValue]
     * @returns {number}
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
 * Shared static instance of URL. Uses the value of location.href on load.
 */
const url = new URL( typeof window === 'undefined' ? '' : location.href );

export { url, URL };