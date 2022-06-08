const {v4: uuidv4} = require('uuid');

let users = [];

const getUsers = (req, res) => {
    res.send(users);
}

const getUserByID = (req, res) => {
    const {id} = req.params;

    const selectedUser = users.find((user) => user.id === id);
    
    res.send(selectedUser);
}


const createUser = (req, res) => {

    const user = req.body;
    
    users.push({ id: uuidv4(), ...user  });
    res.send(users);
}

const updateUser = (req, res) => {
    const {id} = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);
    if (firstName) user.firstName = firstName;
    
    if (lastName) user.lastName = lastName;
    
    if (age)  user.age = age;
    
    res.send(`User with the ID: ${id} : has been updated`);
}


const deleteUser = (req, res) => {
    const {id} = req.params;
    
    users = users.filter((user) => user.id !== id);

    res.send(`User with the id: ${id} is deleted from the Database`);

}



module.exports = { createUser, getUsers, getUserByID, updateUser, deleteUser };
