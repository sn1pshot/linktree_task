const express = require("express")
const user_Router = express.Router()
const{create_user, getUser, updateUser, deleteUser} = require("../controllers/controllers")

user_Router.post('/post',create_user)
user_Router.get('/get/:userId',getUser)
user_Router.put('/put/:user_id',updateUser)
user_Router.delete('/delete/:user_id',deleteUser)

module.exports= user_Router