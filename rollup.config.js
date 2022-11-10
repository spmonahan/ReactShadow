import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

module.exports = {
    input: `src/${process.env.input}.js`,
    external: [
        'react',
        'react-dom',
        'react-dom/server',
        'prop-types',
        'styled-components',
        '@emotion/react',
        '@emotion/cache',
        '@emotion/server',
        '@material-ui/styles',
        'jss',
        '@griffel/react',
    ],
    output: [
        {
            file: `dist/${process.env.output}.esm.js`,
            format: 'esm',
            sourcemap: true,
            exports: 'named',
        },
        {
            file: `dist/${process.env.output}.js`,
            format: 'cjs',
            sourcemap: true,
            exports: 'named',
        },
    ],
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
        }),
        commonjs({
            namedExports: {
                include: 'node_modules/**',
                'node_modules/react/index.js': [
                    'cloneElement',
                    'createContext',
                    'Component',
                    'createElement',
                    'useRef',
                    'useState',
                    'useCallback',
                    'useContext',
                    'useEffect',
                ],
                'node_modules/react-is/index.js': [
                    'isElement',
                    'isValidElementType',
                    'ForwardRef',
                    'Memo',
                ],
                'node_modules/styled-components/dist/styled-components.esm.js': [
                    'createContext',
                ],
                'node_modules/humps/humps.js': ['decamelize'],
                'node_modules/react-dom/server.js': ['renderToString'],
            },
        }),
        terser(),
    ],
};
