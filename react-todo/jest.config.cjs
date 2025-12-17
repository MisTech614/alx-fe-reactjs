module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/test/setup.js"],
    moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy",
    },
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
  };
  