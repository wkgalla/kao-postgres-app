import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import routeMiddleWare from './routes';

const app = new Koa();

app.use(bodyParser());
app.use(routeMiddleWare());

app.listen(4000);