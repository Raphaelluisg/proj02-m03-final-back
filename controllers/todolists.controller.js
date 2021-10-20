const mongoose = require('mongoose');
const TodolistsServices = require('./../services/todolists.service');

const todolistsService = new TodolistsServices();

class TodolistsController {
    getTodolists = async (req, res) => {
        const todolists = await todolistsService.findAll();
        res.send(todolists);
    }

    getTodolistsById = async (req, res) => {
        const id = req.params.id;

        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(403).send('Invalid Id');
            return;
        }

        const todolist = await todolistsService.findById(id);
        if(!todolist){
            res.status(404).send('To-do not found.');
            return
        }
        res.status(200).send(todolist);
    }

    createTodolist = async (req, res) => {
        const todolist = req.body;
        const todolistSaved = await todolistsService.createTodolist(todolist);
        res.send({ message: `${todolistSaved.text} successfully created.`});
    }

    editTodolist = async (req, res) => {
        const id = req.params.id;
        const todolist = req.body;
        await todolistsService.editTodolist(id, todolist)
        .then(() => {
            res.status(200).send({ message: 'To do updated successfully'})
        })
        .catch((error) => res.status(500).send({ error: `Server error: ${error}`}));
    }

    deleteTodolist = async (req, res) => {
        const id = req.params.id;
        await todolistsService.deleteTodolist(id)
        .then(() => res.status(200).send({ message: 'To do deleted successfully.'}));
    }
}


module.exports = TodolistsController;