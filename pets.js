const {v4: uuidv4} = require('uuid');

exports.PETS = [
    {
        id: uuidv4(),
        name: 'Molly',
        photoUrls: [
            'someUrl0',
            'someUrl1',
            'someUrl2',
        ],
        status: 'available',
    },
    {
        id: uuidv4(),
        name: 'Holly',
        photoUrls: [
            'someUrl0',
            'someUrl1',
            'someUrl2',
        ],
        status: 'pending',
    },
    {
        id: uuidv4(),
        name: 'Jessica',
        photoUrls: [
            'someUrl0',
            'someUrl1',
            'someUrl2',
        ],
        status: 'sold',
    },
    {
        id: uuidv4(),
        name: 'Balu',
        photoUrls: [
            'someUrl0',
            'someUrl1',
            'someUrl2',
        ],
        status: 'available',
    },
    {
        id: uuidv4(),
        name: 'Tom',
        photoUrls: [
            'someUrl0',
            'someUrl1',
            'someUrl2',
        ],
        status: 'sold',
    }
];
