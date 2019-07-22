/* eslint-disable import/no-default-export */

import pkg from './package.json';

const banner = `/**
 * @module @georgealways/js
 */
`;

export default {
    input: 'bundle.js',
    output: [
        { banner, file: pkg.main, format: 'cjs' },
        { banner, file: pkg.module, format: 'es' }
    ]
};