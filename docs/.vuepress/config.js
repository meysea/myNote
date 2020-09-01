//主配置文件
module.exports = {
    title: '知码学院',
    base: '/myNote/',
    description: '君哥带你上王者',
    dest: './dist',//默认在.vuepress目录下
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/img/logo.jpg'}],
        ["link", { rel: "stylesheet", href: "/css/style.css" }],
        ["script", { charset: "utf-8", src: "/js/main.js" }]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require('./nav.js'),
        sidebar:require('./sidebar.js'),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
