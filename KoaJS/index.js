const koa = require("koa");
const logger = require("koa-logger");
const route = require("koa-route");
const app = new koa();

app.use(logger());

app.use(route.get("/",ctx => {
    ctx.body = "hello world";
}));

app.use(route.get("/sign",ctx => {
    ctx.body = "sign up";
}))

app.listen(8080);
