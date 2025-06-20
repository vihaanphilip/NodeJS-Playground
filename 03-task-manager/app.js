const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

//middleware to parse JSON bodies
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
})

app.use('/api/v1/tasks', tasks);

const port = 4000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})