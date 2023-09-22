const mongoose =require('mongoose')
const express=require ('express')
const AuthServices= require('../Service/Authservices')
const AuthentificationRouter = express.Router();

AuthentificationRouter.post('/Signup',AuthServices.Signup)
AuthentificationRouter.post('/Signin',AuthServices.Signin)

module.exports=AuthentificationRouter;