'use strict';
const api = require('./generalConfig/api');
const requestConfig = require('./generalConfig/requstConfig');
module.exports = appInfo => {
    const config = exports = {};
    config.security = {
        csrf: {
            // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
            ignore: '/api',
        },
    };
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1531993216598_9019';

    // add your config here
    config.middleware = ['errorHandler'];
    config.errorHandler={
        match: '/api',
    };
    //config.middleware = ['gzip'];
    //gzip: {
    //  threshold: 1024
    // }

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
        // defaultViewEngine: 'twig',
        // mapping: {
        //     // '.tpl': 'nunjucks',
        //     '.twig': 'twig',
        // },
    };
    config.api = api;
    config.bodyParser = {
        jsonLimit: '1mb',
        formLimit: '1mb',
    };
    config.httpclient = requestConfig;
    return config;
};
// 添加 view 配置