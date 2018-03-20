module.exports = {
    extends: 'airbnb',
    // 支持的语法环境
    env: {
        "browser": true,
        "node": true,
        "mocha": true,
        "es6": true
    },

    parserOptions: {
        ecmascript: 6,
        sourceType: 'module',
    },

    plugins: [
        "react",
        "import",
        "jsx-a11y",
    ],

    rules: {
        indent: ["error", 4],
        'react/jsx-indent': ['error', 4],
        // react 属性缩进
        'react/jsx-indent-props': [1, 4],
        'react/jsx-filename-extension': ['error', { 'extensions': ['.js'] }],
        // react 禁用数组的index当做组件的key关闭
        'react/no-array-index-key': 'off',
        // Prevent missing React when using JSX 
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': ['error', { ignore: ['dispatch'], customValidators: [] }],
        // Enforce label tags have associated control.
        'jsx-a11y/label-has-for': 'off',
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
        "import/resolver": 'webpack',
    },
};
