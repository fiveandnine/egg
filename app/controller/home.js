'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
    async index() {

        await this.ctx.render('index/index.tpl');
        // this.ctx.render('news/list.tpl');
        //   this.ctx.redirect("/news")
    }
}

module.exports = HomeController;
