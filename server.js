

//
const express = require('express');
const app = express();
const appName = 'tin-din-app';
const outPutPath = `${__dirname}/dinst/${appName}`;
app.use(express.static(outPutPath));
app.get('/*', (req, res) => {
    res.sendFile(`${outPutPath}/indx.html`);
})
app.listen(process.env.PORT);

