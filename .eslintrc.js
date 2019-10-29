module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },

  env: {
    browser: true
  },

  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/recommended', 'prettier/vue'],
  // required to lint *.vue files
  plugins: ['vue'],

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true
  },

  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'arrow-parens': 'off',
    'one-var': 'off',
    'prefer-promise-reject-errors': 'off',
    semi: ['error', 'never'],
    indent: [
      'error',
      2,
      {
        ArrayExpression: 1,
        MemberExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1
      }
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always'
      }
    ],
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 1
      }
    ],
    'array-bracket-newline': [
      'warn',
      {
        multiline: true,
        minItems: 2
      }
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          consistent: true
        },
        ObjectPattern: {
          multiline: true,
          consistent: true
        },
        ImportDeclaration: {
          multiline: true,
          consistent: true,
          minProperties: 0
        }
      }
    ],
    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // VUE
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 3,
          allowFirstLine: false
        }
      }
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0
      }
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        baseIndent: 0
        // ignores: ['VAttribute']
      }
    ]
    // Correct typescript linting until at least 2.0.0 major release
    // See https://github.com/typescript-eslint/typescript-eslint/issues/501
    // See https://github.com/typescript-eslint/typescript-eslint/issues/493
    // '@typescript-eslint/explicit-function-return-type': 'off'
  }
}
