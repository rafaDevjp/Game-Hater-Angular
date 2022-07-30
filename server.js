

//
const express = require('express');
//
const app = express();
//
const appName = 'tin-din-app';
//
const outPutPath = `${__dirname}/dist/${appName}`;
//
app.use(express.static(outPutPath));
//
app.get('/*', (req, res) => {
    res.sendFile(`${outPutPath}/index.html`);
})
app.listen(process.env.PORT);

