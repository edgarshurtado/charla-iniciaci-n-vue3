const CopyWebpackPlugin = require("copy-webpack-plugin");
const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, "src", "assets/"),
          to: "assets/",
        },
        {
          from: path.resolve(__dirname, "src", "styles/"),
          to: "styles/",
        },
      ]),
    ],
  },
});
