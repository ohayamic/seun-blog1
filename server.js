const express = require('express');
const app = express();

app.use(express.static('./dist/seun-blog1'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/seun-blog1/'}),
);

app.listen(process.env.PORT || 8080);
