
const todoModel = require('../models/todoModel');


const addlist = async function(req, res){
    try {
        let data = req.body;
        let addlist = await todoModel.create(data)
        res.status(201).send({status: true, message: "List added Successfully", data: addlist})
        
    } catch (error) {
        res.status(500).send({status: false, message: error.message})
    }
} 

const deleteList = async function(req,res){
    try {

        let data = req.body.title
        let deleteListCheck = await todoModel.findOneAndUpdate({title: data, isDeleted: false},{ $set: { isDeleted: true } }, {new: true})
        res.status(200).send({status: true, message: "List Deleted Successfully", data: deleteListCheck})
        
    } catch (error) {
        res.status(500).send({status: false, message: error.message})
    }
}


module.exports = {addlist, deleteList}