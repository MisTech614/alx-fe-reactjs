module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.js"],
    moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy",
    },
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
  };
 
