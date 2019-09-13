const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true} ));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': 'HongGilDong',
            'birthday': '961222',
            'gender': 'Man',
            'job': 'Student'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'NaYuBin',
            'birthday': '990203',
            'gender': 'Woman',
            'job': 'Designer'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': 'KimLeeUn',
            'birthday': '980806',
            'gender': 'Man',
            'job': 'Programmer'
        }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`))