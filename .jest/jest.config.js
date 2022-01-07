const path = require("path");

module.exports = {
    cache: true,
    verbose: true,

    rootDir: path.resolve(__dirname, ".."),

    // The root of source code
    roots: [ "<rootDir>/src" ],

    coverageDirectory: path.resolve(__dirname, "../coverage"),
    collectCoverageFrom: [ "<rootDir>/src/**/**/*.test.{ts,tsx}", "!<rootDir>/src/**/*.d.ts", "!<rootDir>/src/app-design/**/*.{ts,js,tsx}" ],
    coverageThreshold: {
        global: {
            branches: 60,
            functions: 60,
            lines: 60,
            statements: 60,
        }
    },
    coverageReporters: [ "text", "json", "html" ],

    errorOnDeprecated: true,

    // Runs special logic, such as cleaning up components when using React Testing Library and adds special extended assertions to Jest
    setupFilesAfterEnv: [ "@testing-library/jest-dom/extend-expect" ],

    // Test spec file resolution pattern
    testMatch: [ "<rootDir>/src/**/*.test.{ts,tsx}" ],

    // Module file extensions for importing
    moduleFileExtensions: [ "ts", "tsx", "js" ],

    testEnvironment: "jsdom",
};
