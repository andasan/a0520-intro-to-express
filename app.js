const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const members = [
    {
        id: 1,
        name: 'JC',
        email: 'jc@mail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'EJ',
        email: 'ej@mail.com',
        status: 'active'
    },
    {
        id: 3,
        name: 'PA',
        email: 'pa@mail.com',
        status: 'inactive'
    }
];

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//routes
app.get('/', (req,res) => {
    // res.send('<h1>Hello!!</h1>');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/members', (req,res) => {
    res.json(members);
});

app.get('/api/members/:id', (req,res) => {
    //do some logic here to find the id from the params
    // res.json(members);
});

app.post('/api/member/post', (req,res) => {
    console.log(req.body);
    res.send(req.body);
});

//catch-all-middleware
app.use((req,res) => {
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));