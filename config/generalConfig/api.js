// 添加 news 的配置项
module.exports = {
    news: {
        hosts: {
            defaults: {
                url: 'https://registry.npm.taobao.org/egg/latest',
                headers: {
                    host: 'node.ll.dev.zhichang.com'
                }

                // url: 'http://192.168.1.110',
                // headers: {
                //     host: 'node.wk.dev.zhichang.com'
                // }
            }
        },
        items: {
            'latest': '/egg/latest',
        }
    }
};
