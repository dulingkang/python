module.exports = {
  title: '开发者思维',
  description: '教程',
  plugins: [
    require('./sidebar.js')
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Python基础', link: '/base/' },
    ]
  }
}
