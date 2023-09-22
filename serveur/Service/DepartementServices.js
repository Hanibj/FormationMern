const Depart = require('../Model/Departement');
const mongoose = require('mongoose')


const AjouterDepartement = async (req, res) => {
    const { code, nom } = req.body
    let newDepartt = { code, nom }
    console.log(newDepartt)
    try {
        const newDepart = await Depart.create(newDepartt);


        res.status(200).send({
            message: `${newDepart.nom} is succussfful
    ly added`});
    }
    catch (err) {
        res.status(400).send({ error: `error adding newDepart ${err}` })
    }
}

const AllDepartement = async (req, res) => {
    Depart.find({}).then((results, err) => {
        if (!err) {
            console.log(results)
            res.send(results);
        }
    });
}
const SingleDepartement = async (req, res) => {
    const { nom } = req.params
    console.log(nom)
    try {
        const depart = await Depart.find({ nom: nom });
        console.log(depart)
        res.status(200).send(depart);
    }
    catch (err) {
        res.status(400).send({
            error: `error  department ${err}`
        })
    }
}

const UpdateDepartement = async (req, res) => {

    const { id } = req.params
    console.log(id)
    try {
        const depart = await Depart.findByIdAndUpdate({ _id: id }, req
            .body);
        await depart.save();
        res.status(200).send({
            message: `${depart.nom} is succussffully
    updated`});
    }
    catch (err) {
        res.status(400).send({
            error: `error updating department ${err}`
        })
    }
}
const DeleteDepartement = async (req, res) => {
    try {
        const depart = await Depart.findByIdAndDelete(req.params.id);
        res.status(200).send({
            message: `${depart.nom} is succussffully
    deleted`});
    }
    catch (err) {
        res.status(400).send({
            error: `error deleting department ${err}`
        })
    }
}


module.exports = {
    AjouterDepartement,
    DeleteDepartement,
    UpdateDepartement,
    SingleDepartement,
    AllDepartement
}