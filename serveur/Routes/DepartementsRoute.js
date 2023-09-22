const express = require("express");
const DepartementService=require('../Service/DepartementServices')
const auth = require('../middleware/auth')
const DepartementRouter = express.Router();



DepartementRouter.get("/departements",DepartementService.AllDepartement)
DepartementRouter.put("/update/:id",DepartementService.UpdateDepartement)
DepartementRouter.get("/Single/:nom",DepartementService.SingleDepartement)
DepartementRouter.delete("/delete/:id",DepartementService.DeleteDepartement)
DepartementRouter.post("/add",DepartementService.AjouterDepartement)

module.exports =DepartementRouter