module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/azusa_vuepress/',
    themeConfig: {
        sidebar: [
            '/',
            '/Category_1/',
            {
                title: 'Cat 2',
                path: '/Category_2/',
                children: [
                    '/Category_2/test1.md',
                    '/Category_2/test2.md',
                ]
            }
        ]
    
    }

}