module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // 手动按需引入vantUI库
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
