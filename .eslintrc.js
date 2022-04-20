module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8, sourceType: 'module' },
  ignorePatterns: ['node_modules/*'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: {
          // Reactのバージョン。"detect"にすることで、インストールされているバージョンが自動的に選択される。
          version: 'detect',
        },
        // eslint-import-resolver-typescript を利用する
        'import/resolver': {
          typescript: {},
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
        'prettier',
      ],
      rules: {
        // @/features/*/* にマッチするモジュールのインポートを禁止する
        'no-restricted-imports': [
          'error',
          {
            patterns: ['@/features/*/*'],
          },
        ],
        // LF 以外の改行を禁止する
        'linebreak-style': ['error', 'unix'],
        // コンポーネントの Props の検証は TypeScript で行うのでオフにする
        'react/prop-types': 'off',
        // import の記述を自動でソートする設定
        'import/order': [
          'error',
          {
            // ソートの並び順のルール
            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
            // インポートグループ間に必ず改行を追加する
            // 例えば、組み込みモジュールどサードパーティーモジュールをインポートした場合、
            // 以下のように、組み込みモジュールどサードパーティーモジュールのインポートの記述の間に改行が追加される。
            // import fs from 'fs';
            // import path from 'path';
            //
            // import _ from 'lodash';
            // import chalk from 'chalk';
            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#newlines-between-ignorealwaysalways-and-inside-groupsnever
            'newlines-between': 'always',
            alphabetize: {
              // アルファベット順にソートする
              order: 'asc',
              // 大文字と小文字の区別をしない
              caseInsensitive: true,
            },
          },
        ],
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
        'import/default': 'off',
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
        'import/no-named-as-default-member': 'off',
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
        'import/no-named-as-default': 'off',

        // それぞれのファイルで React をインポートしていなくてもエラーが出ないようにする
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        'react/react-in-jsx-scope': 'off',

        // a タグに href 属性がなくてもエラーが出ないようにする
        // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
        'jsx-a11y/anchor-is-valid': 'off',

        // 未使用の変数を許可しない
        '@typescript-eslint/no-unused-vars': ['error'],

        // 関数の戻り値の型の検証は TypeScript で行うのでオフにする
        '@typescript-eslint/explicit-function-return-type': ['off'],
        // エクスポートする関数の戻り値や引数の型の検証は TypeScript で行うのでオフにする
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        // 空の関数を許可する
        '@typescript-eslint/no-empty-function': ['off'],
        // any 型の検証は TypeScript で行うのでオフにする
        '@typescript-eslint/no-explicit-any': ['off'],
      },
    },
  ],
}
