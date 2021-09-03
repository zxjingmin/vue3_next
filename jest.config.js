/*
 * @Author: 邵明
 * @Date: 2021-02-16 22:05:44
 * @Last Modified by: 邵明
 * @Last Modified time: 2021-09-03 18:43:45
 */
const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname),
  clearMocks: true,
  // setupFilesAfterEnv: ['jest-allure/dist/setup'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,vue}'],
  // 告诉Jest需要匹配的文件后缀
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  // 别名设置
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  preset: 'vite-jest',
  testEnvironment: 'jsdom',
  // 匹配哪些文件进行测试
  testMatch: ['**/tests/unit/**/*.spec.ts?(x)', '**/__test__/**/*.spec.ts?(x)'],
  // 不进行匹配的目录
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  // 匹配到 .vue 文件的时候用 vue-jest处理， 匹配到.js文件的时候用 babel-jest 处理
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\.ts$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
};
