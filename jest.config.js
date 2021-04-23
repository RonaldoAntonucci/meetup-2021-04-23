module.exports = {
  roots: ['<rootDir>/__tests__'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: "node",
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/__tests__/$1',
    '@/(.*)': '<rootDir>/src/$1'
  },
  testMatch: ['**/*.spec.ts', '**/*.test.ts']
};
