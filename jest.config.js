module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFiles: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^@userInterface/([^\\.]*)$': '<rootDir>/src/userInterface/$1',
  },
};
