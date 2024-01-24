module.exports = {
    env: {
        browser: false,
        node: true,
        es2021: true,
    },
    extends: [
        '@mlyngvo/eslint-config/node'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    ignorePatterns: [
        '*.config.js',
        'setupTests.ts',
    ],
    rules: {
        'import/export': 'off',
    }
}