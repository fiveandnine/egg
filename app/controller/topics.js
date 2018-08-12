const Controller =require('egg').Controller;
const createRule={
    title: { type: 'string' },
    content: { type: 'string' },
};
class TopicsController extends Controller{
    async create(){
        const ctx = this.ctx;
        // 校验 `ctx.request.body` 是否符合我们预期的格式
        // 如果参数校验未通过，将会抛出一个 status = 422 的异常
        // try{
        //     ctx.validate(createRule);
        // } catch (err){
        //     console.log(err.errors);
        // }

        // 调用 service 创建一个 topic
        // const id = await ctx.service.topics.create(ctx.request.body);
        // 设置响应体和状态码
        console.log(ctx.request.body);
        ctx.body = {
            topic_id: 1,
        };
        ctx.status = 201;
    }
}
module.exports = TopicsController;