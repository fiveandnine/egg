'use strict';
const api = require('./generalConfig/api');
// const EasyWebpack = require('easywebpack-react');

const path = require('path');
const requestConfig = require('./generalConfig/requstConfig');
module.exports = appInfo => {
    const config = exports = {};
    config.security = {
        csrf: {
            enable: false,
            // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
            ignore: '/api',
            ignoreJSON: true,
        },
        domainWhiteList: [ 'http://localhost:3000' ],
        credentials:true


    };
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1531993216598_9019';

    // add your config here
    //处理借口返回错误
    config.middleware = ['errorHandler'];
    config.errorHandler = {
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
    };
    config.apiProxy = {
        fetchUrl: '',
        headers: {}
    };
    config.api = api;
    config.bodyParser = {
        jsonLimit: '1mb',
        formLimit: '1mb',
    };
    config.static = {
        prefix:'/public/',
        dir: path.join(appInfo.baseDir, 'app/reactWeb/build')
    };
    config.httpclient = requestConfig;
    return config;
};
// 添加 view 配置