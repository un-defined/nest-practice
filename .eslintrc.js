/**
 * https: //eslint.org/
 * https: //github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js
 * http : //eslint.cn/docs/rules/
 */

module.exports = {
    "extends": [
        "yylint"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "env": {
        // "es7": true,
        "es6": true,
        "node": true
    },
    // 全局变量
    "globals": {

    },
    "rules": {
        // 以下配置检查
        // "array-bracket-spacing": ["error", "always"],   // 强制在[]内使用空格
        "object-curly-spacing": ["error", "always"], // 强制在{}使用一致的空格
        "indent": ["error", 2], // 缩进
        "quotes": ["error", "single"], // 强制使用一致的单引号
        "semi": ["error", "always"], // 要求使用分号
        "max-params": ["error", 15], // 强制函数定义中最多允许的参数数量
    }
};