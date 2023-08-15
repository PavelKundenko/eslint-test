/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    // Regular Rules
    'import/prefer-default-export': 'off',
    'key-spacing': [2, {
      'singleLine': {
        'beforeColon' : false,
        'afterColon'  : true
      },
      'multiLine': {
        'beforeColon' : false,
        'afterColon'  : true,
        'align'       : {
          'beforeColon' : true,
          'afterColon'  : true,
          'on'          : 'colon'
        }
      },
    }],
    'comma-dangle': ['error', {
      'arrays'    : 'always-multiline',
      'objects'   : 'always-multiline',
      'imports'   : 'always-multiline',
      'exports'   : 'always-multiline',
      'functions' : 'only-multiline'
    }],

    // React Rules
    'react/function-component-definition': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-sort-props': ['error', {
      'callbacksLast'        : true,
      'shorthandFirst'       : true,
      'ignoreCase'           : true,
      'noSortAlphabetically' : true,
      'reservedFirst'        : true,
    }],
    'react/jsx-curly-spacing': [1, { 'when': 'never' }],
    'react/jsx-max-props-per-line': [1, { 'maximum': 2, 'when': 'always' }],

    // TS Rules
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-unused-vars' : [
      'warn',
      {
        args               : 'none',
        ignoreRestSiblings : true,
      },
    ],
  },
  overrides: [
    // override "simple-import-sort" config
    {
      "files": ["*.js", "*.jsx", "*.ts", "*.tsx"],
      "rules": {
        "simple-import-sort/imports": [
          "error",
          {
            "groups": [
              // Packages `react` related packages come first.
              ["^react", "^\\w", "^@\\w"],
              // Internal packages.
              [
                "^@(/.*|$)",
                "^@app(/.*|$)",
                "^@utils(/.*|$)",
                "^@store(/.*|$)",
                "^@routes(/.*|$)",
                "^@styles(/.*|$)",
                "^@images(/.*|$)",
                "^@shared(/.*|$)",
                "^@queries(/.*|$)",
                "^@typings(/.*|$)",
                "^@modules(/.*|$)",
                "^@components(/.*|$)"
              ],
              // Side effect imports.
              ["^\\u0000"],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^.+\\.?(css)$"]
            ]
          }
        ]
      }
    }
  ],
}
