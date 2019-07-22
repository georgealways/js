const toString = Object.prototype.toString;

/**
 * Boolean test methods for type introspection.
 */
export const is = {

    /**
     * @param {*} v
     * @returns {boolean} true if the value is a string
     */
    string: v => toString.call( v ) === '[object String]',

    /**
     * @param {*} v
     * @returns {boolean} true if the value is a function
     */
    function: v => /\[object (Async)?Function\]/.test( toString.call( v ) ),

    /**
     * @param {*} v
     * @returns {boolean} true if the value is a string
     */
    number: v => toString.call( v ) === '[object Number]',

    /**
     * @kind function
     * @param {*} v
     * @returns {boolean} true if the value is an array
     */
    array: Array.isArray || ( v => toString.call( v ) === '[object Array]' ),

    /**
     * @param {*} v
     * @returns {boolean} true if the value is an object
     */
    object: v => v === Object( v ),

    /**
     * @param {*} v
     * @returns {boolean} true if the value is a boolean
     */
    boolean: v => v === true || v === false

};