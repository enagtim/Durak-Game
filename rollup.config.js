import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import css from "rollup-plugin-css-only";

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        name: 'CardGame'
    },
    plugins: [
        resolve(),
        commonjs(),
        css({ output: 'dist/styles.css' })
    ]
}