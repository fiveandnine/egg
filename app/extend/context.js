module.exports = {
    async fetch(url, options, callback){
        options = options || {};
        let dataType = options.dataType;
        delete options.dataType;
        if(!/^https?:\/\//.test(url)){
            //app默认环境URL和headers
            const proxyConfig = {};
            proxyConfig.url = this.app.config.apiProxy.fetchUrl || this.config.api.news.hosts.defaults.url;
            proxyConfig.headers = this.app.config.apiProxy.headers || this.config.api.news.hosts.defaults.headers;

            url = proxyConfig.url + url;
            //自定义URL和headers
            options.dataType = dataType || 'json';
            if (options.headers) {
                delete options.headers.host;
                delete options.headers['content-length'];
            }
            options.headers = Object.assign({}, proxyConfig.headers, options.headers);
        }
        const results = await this.curl(url, options, callback);
        console.log(results);
        return results;
    },

}