const path = require("path");
const CracoLessPlugin = require("craco-less");

const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // webpack
  webpack: {
    alias: {
      "@": resolve("src"), // 配置 ailas 根目录别名
      components: resolve("src/components"), // 组件目录别名
      utils: resolve("src/utils"), // 自定义工具目录别名
    },
  },
};
