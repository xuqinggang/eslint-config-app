module.exports = {
    // Stop ESLint from looking for a configuration file in parent folders
    root: true,
    extends: [
        'airbnb',
        'plugin:flowtype/recommended',
    ],

    // 支持的语法环境
    env: {
        browser: true,
        node: true,
        mocha: true,
        es6: true,
    },

    parser: 'babel-eslint',

    parserOptions: {
        ecmascript: 6,
        sourceType: 'module',
    },

    plugins: [
        'babel',
        'flowtype',
        'react',
        'import',
        'jsx-a11y',
    ],

    rules: {
        indent: ['error', 4],

        // react
        // 缩进
        'react/jsx-indent': ['error', 4],
        // react 属性缩进
        'react/jsx-indent-props': [1, 4],
        'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
        // react 禁用数组的index当做组件的key关闭
        'react/no-array-index-key': 'off',
        // Prevent missing React when using JSX
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': ['error', { ignore: ['dispatch'], customValidators: [] }],
        // 修改react 内部方法属性排序
        'react/sort-comp': [
            1,
            {
                order: [
                    'static-methods',
                    'constructor',
                    'everything-else',
                    'lifecycle',
                    'render',
                ],
            },
        ],
        // Enforce label tags have associated control.
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/anchor-is-valid': 'off',

        // regular
        // 尾随逗号
        'comma-dangle': ['error', {
            objects: 'always-multiline',
            arrays: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],

        // 括号前后一致
        'function-paren-newline': ['error', 'consistent'],

        // 允许三元表达式和与或操作符表达式
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],

        // allaw href="javascript:xxx"
        'no-script-url': 'off',

        'no-param-reassign': [
            'warn',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'acc', // for reduce accumulators
                    'e', // for e.returnvalue
                    'ctx', // for Koa routing
                    'req', // for Express requests
                    'request', // for Express requests
                    'res', // for Express responses
                    'response', // for Express responses
                    '$scope', // for Angular 1 scopes
                ],
            },
        ],
        // 强制有return语句
        'consistent-return': 'off',
    },

    // eslint-import-resolver-webpack 让eslint，使用webpack的resolver来检查package是否引用正确
    settings: {
        'import/resolver': {
            webpack: {
                config: 'webpack.config.js',
            },
        },
    },
};
