const Koa = require("koa");
const logger = require("koa-logger");
const Router = require("koa-router");
const app = new Koa();
app.use(logger());

const router = new Router({
    prefix: "/api"
});
router.get("/", (ctx, next) => {
    ctx.body = "hello world";
});
router.get("/sign",(ctx,next) => {
    ctx.body = "sign up";
});
app.use(router.routes());
app.use(router.allowedMethods());


/*
const route = require("koa-route");
app.use(route.get("/",ctx => {
    ctx.body = "hello world";
}));

app.use(route.get("/sign",ctx => {
    ctx.body = "sign up";
}))
*/

app.listen(8080);
console.log("The server side starts up.")
