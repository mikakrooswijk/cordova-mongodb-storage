import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';

const extensions = [
    '.js', '.ts'
];

const name = 'cordovaMongodbStorage';

export default [
    {
        input: './typescript/cordova-mongodb.plugin.ts',
        external: [],
        plugins: [
            resolve({ extensions }),
            commonjs(),
            babel({
                extensions,
                include: ['typescript/**/*'],
                exclude: ['typescript/**/*.spec.ts']
            }),
            cleanup()
        ],
        output: [{
            file: './www/cordova-mongodb.plugin.js',
            format: 'iife',
            name,
            globals: {}
        }]
    }
];
