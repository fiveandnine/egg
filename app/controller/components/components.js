const Controller = require('egg').Controller;
class ComponentController extends Controller {
    index() {
        this.ctx.body = this.ctx.params;
    }
    async reactR() {
        const { ctx } = this;
        await ctx.render('react/home.js');
    }
}
module.exports = ComponentController;