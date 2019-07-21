const toString = Object.prototype.toString;

export default {
    string:   v => toString.call( v ) === '[object String]',
    function: v => /\[object (Async)?Function\]/.test( toString.call( v ) ),
    number:   v => toString.call( v ) === '[object Number]',
    array:    Array.isArray || ( v => toString.call( v ) === '[object Array]' ),
    object:   v => v === Object( v ),
    boolean:  v => v === true || v === false
};