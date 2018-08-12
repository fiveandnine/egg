'use strict';

// had enabled by egg
// exports.static = true;
// exports.nunjucks = {
//     enable: true,
//     package: 'egg-view-nunjucks'
// };
module.exports={
    validate : {
        enable: true,
        package: 'egg-validate',
    },
    nunjucks :{
        enable: true,
        package: 'egg-view-nunjucks'
    },
    proxyagent: {
        enable: true,
        package: 'egg-development-proxyagent',
    },
    // assets: {
    //     enable: true,
    //     package: 'egg-view-assets',
    // }
    // reactssr: {
    //     enable: true,
    //     package: 'egg-view-react-ssr',
    // }
    // twig : {
    //     enable: true,
    //     package: 'egg-view-twig',
    // }
    // sequelize: {
    //     enable: true,
    //     package: 'egg-sequelize',
    // },
    // graphql: {
    //     enable: true,
    //     package: 'egg-graphql',
    // }
}

