const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
}
);

app.get('/about', (req, res) => {
    console.log('User hit the about page');
    res.send('About Page');
}
);

app.listen(4000, () => {
    console.log('Server is listening on port 4000');
}
);