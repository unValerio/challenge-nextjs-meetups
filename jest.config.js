module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFiles: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^@userInterface/([^\\.]*)$': '<rootDir>/src/userInterface/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '<rootDir>/src/**/*.jsx',
    '<rootDir>/src/**/*.ts',
    '<rootDir>/src/**/*.tsx',
    '!<rootDir>/src/**/*.styled.ts',
    '!<rootDir>/src/**/*.styled.js',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
};
