import pkg from './package.json';

export default {
    input: 'bundle.js',
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'es' }
    ]
};