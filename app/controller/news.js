const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list2() {
        const dataList = {
            list: [
                { id: 1, title: 'this is news 1', url: '/news/1' },
                { id: 2, title: 'this is news 2', url: '/news/2' }
            ]
        };
        await this.ctx.render('index/index.tpl');
        // await this.ctx.render('index/index.tpl', dataList);
    }
    async list() {
        const ctx = this.ctx;
        ctx.body=ctx.query.name || 'without name';
    }
    // async list2() {
    //     const dataList = await this.ctx.curl('http://127.0.0.1:7001/news/list4');
    //     // console.log('AAAAAAAA',dataList);
    //     await this.ctx.render('news/list.tpl', dataList);
    // }
    async list3 (){
        const result_data =await this.ctx.curl('https://registry.npm.taobao.org/egg/latest',{dataType: 'json'});
        // console.log(result_data.data);
        this.ctx.set('Access-Control-Allow-Origin','*');
        this.ctx.body = result_data;
        this.ctx.status = 201;
    }
    async list5 (){
        const result_data =await this.ctx.curl('https://testing.zhinanzhen.ai/resumes/doGetResumeList',{method: 'GET',dataType: 'json'});
        // console.log(result_data.data);
        this.ctx.body = result_data;
        this.ctx.status = 201;
    }
    async list4() {
        const dataList = {
            list: [
                { id: 1, title: 'this is news 1', url: '/news/1' },
                { id: 2, title: 'this is news 2', url: '/news/2' },
                { id: 1, title: 'this is news 1', url: '/news/1' },
                { id: 2, title: 'this is news 2', url: '/news/2' }
            ]
        };
        this.ctx.body = dataList;
        this.ctx.status = 201;
    }
}

module.exports = NewsController;