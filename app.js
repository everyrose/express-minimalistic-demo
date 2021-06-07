const express = require('express')
const app = express()
const port = 3000

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const {PETS} = require("./pets");

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

const pets = [...PETS];

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/pet', (req, res) => {
    res.json(pets);
})

app.post('/pet', (req, res) => {
    pets.push(req.body)
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})