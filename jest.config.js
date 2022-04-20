const config = {
  // Jest v27 から testEnvironment のデフォルト値が "node" になったため、"jsdom" を利用したい場合は指定必須
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              // React v17 に追加された、新しい JSX トランスフォームを利用する。
              // https://ja.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
              // 新しい JSX トランスフォームは react/jsx-runtime を自動的にインポートするため、
              // React コンポーネントで React をインポートしていなくても、以下のようなエラーが発生しなくなる。
              // Error: Uncaught [ReferenceError: React is not defined]
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
}

module.exports = config
