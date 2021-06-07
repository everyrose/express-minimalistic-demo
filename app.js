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

app.put('/pet', (req, res) => {
    const id = req.body.id;
    const index = pets.findIndex(p => p.id === id);
    if (index === -1) {
        console.log('404')
        res.status(404);
        res.send();
    } else {
        pets[index] = req.body;
        res.send(req.body);
    }
})

app.get('/pet/:id', (req, res) => {
    const id = req.params.id;
    const pet = pets.find(p => p.id === id);
    if (pet) {
        res.json(pet);
    } else {
        res.status(404).send();
    }
})

app.delete('/pet/:id', (req, res) => {
    const id = req.params.id;
    const index = pets.findIndex(p => p.id === id);
    if (index < 0) {
        res.status(404).send();
    } else {
        pets.splice(index, 1);
        res.status(200).send();
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})