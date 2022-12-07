const {v4: uuidv4} = require('uuid');

const users = [
    {
        id: uuidv4(),
        name: 'md. mosabber',
        email: 'mosabber@gmail.com'
    },
    {
        id: uuidv4(),
        name: 'md. abir',
        email: 'abir@gmail.com'
    }
]

module.exports = users;