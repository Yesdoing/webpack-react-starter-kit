const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1"
        },
        corejs: { version: 3, proposals: true },
        useBuiltIns: "usage"
      }
    ],
    "@babel/preset-react"
  ];
  
  module.exports = { presets };