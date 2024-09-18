import routes from './routes';

const express = require('express');

const app = express();

routes(app);
app.listen(1245);

export default app;
