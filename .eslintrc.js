module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'prettier/react',
      'prettier/@typescript-eslint',
    ],
    ignorePatterns: [
        'dist/',
        'node_modules/',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            extends: [
                'eslint:recommended',
                'plugin:node/recommended',
            ],
            files: [
                './*.js',
                './scripts/*.js',
            ],
            plugins: [
                'node',
            ],
            rules: {
                'node/no-extraneous-require': 'off',
                'node/no-unpublished-require': 'off',
                'node/shebang': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'prettier',
    ],
    root: true,
    rules: {
        'array-callback-return': 'error',
        'eol-last': 'error',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/array-type': ['error', { default: 'array' }],
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'], 
        '@typescript-eslint/explicit-function-return-type': ['error', {
            allowExpressions: true
        }],
        '@typescript-eslint/member-delimiter-style': ['error', {
            'multiline': {
                'delimiter': 'comma',
                'requireLast': true
            },
            'singleline': {
                'delimiter': 'comma',
                'requireLast': false
            },
            'overrides': {
                'interface': {
                    'multiline': {
                        'delimiter': 'semi',
                        'requireLast': true
                    }
                }
            }
        }],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-unused-vars': ['error', {
            argsIgnorePattern: '^_'
        }],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
