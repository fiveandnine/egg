//模版参数
const localsParams = require('./config/generalConfig/localsParams');

module.exports = app => {
    // 在中间件最前面统计请求时间
    // app.config.coreMiddleware.unshift('report');
    app.once('server', server => {
        console.log('server');
        // websocket
    });
    app.on('error', (err, ctx) => {
        // report error
    });
    app.on('request', ctx => {
        // log receive request
    });
    app.on('response', ctx => {
        // ctx.starttime is set by framework
        const used = Date.now() - ctx.starttime;
        // log total cost
    });
    // app.beforeStart(async () => {
    //     const ctx = app.createAnonymousContext();
    //     // preload before app start
    //     await ctx.service.posts.load();
    // });
    app.beforeStart(async () => {
        // 示例：启动的时候去读取 https://registry.npm.taobao.org/egg/latest 的版本信息
        const result = await app.curl('https://registry.npm.taobao.org/egg/latest', {
            dataType: 'json',
        });
        // console.log('Egg latest version: %s', result.data.version);
    });
    app.httpclient.on('request', req => {
        //req.url 请求 url
        //req.ctx 是发起这次请求的当前上下文
        // console.log('====',req.url);
        // 可以在这里设置一些 trace headers，方便全链路跟踪
    });
    app.httpclient.on('response', result=>{
        // result.res.status
        // result.ctx //是发起这次请求的当前上下文
        // result.req //对应的 req 对象，即 request 事件里面那个 req
    });


    //增加验证函数
    app.validator.addRule('jsonString', (rule, value) => {
        try {
            JSON.parse(value);
        } catch (err) {
            return 'must be json string';
        }
    });
    app.locals={title: '标题111'}
};
