module.exports = (options) => {
    return async function uppercase(ctx, next) {
        console.log(options);
        ctx.query.name = ctx.query.name && ctx.query.name.toUpperCase();
        await next();
    };
};