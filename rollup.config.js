/* eslint-disable import/no-default-export */

import pkg from './package.json';

const opts = {
    banner: `/**
 * @module @georgealways/js
 */
`
};

export default {
    input: 'bundle.js',
    output: [
        { ...opts, file: pkg.main, format: 'cjs' },
        { ...opts, file: pkg.module, format: 'es' }
    ]
};