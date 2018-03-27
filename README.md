# eslint-config-xuqinggang

## 自定义配置eslint，支持`es6`、`react`、`flow`、`babel`

## 常见问题

### 1.webpack配置了resolve.alias(别名路径解析),会导致eslint如下错误
`unable to resolve to path to module 'xxx'`

### 解决办法
安装eslint-import-resolver-webpack package
在当前项目.eslintrc.js文件中加上

```
    settings: {
        'import/resolver': {
            webpack: {
                //为webpack的文件路径
                config: 'build/webpack.config.dev.babel.js',
            },
        },
    },

```
