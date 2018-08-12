'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.index);
    router.get('/components/:component', 'components.components.index');
    router.get('/news',app.middlewares.uppercase(), controller.news.list);
    router.get('/news/list2', 'news.list2');
    router.get('/admin/admin', controller.admin.admin.index);
    router.get('/news/list3','news.list3');
    router.get('/news/list5','news.list5');
    router.get('/news/list4','news.list4');
    router.resources('topics','/api/v2/topic','topics');
    // app.resources('routerName', 'pathMatch', controller) 快速在一个路径上生成 CRUD 路由结构。
};

// // app/router.js
// module.exports = app => {
//     require('./router/news')(app);
//     require('./router/admin')(app);
// };
//
// // app/router/news.js
// module.exports = app => {
//     app.router.get('/news/list', app.controller.news.list);
//     app.router.get('/news/detail', app.controller.news.detail);
// };
//
// // app/router/admin.js
// module.exports = app => {
//     app.router.get('/admin/user', app.controller.admin.user);
//     app.router.get('/admin/log', app.controller.admin.log);
// };
