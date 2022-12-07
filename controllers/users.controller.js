const users  = require('../models/users.model'); 
const {v4: uuidv4} = require('uuid');  


//Get Users
exports.getAllUsers = (req, res)=> {
    res.status(200).json({users})
}


//Create User
exports.createUser = (req, res)=> {

    const newUser = {
        id: uuidv4(),
        name: req.body.name,
        email:  req.body.email
    }

    users.push(newUser);

    res.status(201).json(users)
}


//Update User
exports.updateUser = (req, res)=> {
    const userId = req.params.id;
    const {name, email} = req.body;

    users.filter((user)=> user.id === userId).map((singleUser)=> {
        singleUser.name = name;
        singleUser.email = email;
    })

    res.status(200).json(users);
}


//Delete User
exports.deleteUser = (req, res)=> {
    const userId = req.params.id;

    const data = users.filter((user)=> user.id !== userId);

    res.status(200).json(data);
}