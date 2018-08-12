'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
    async index() {
        this.ctx.body = 'hi, egg adminqqqq';
    }
}

module.exports = AdminController;