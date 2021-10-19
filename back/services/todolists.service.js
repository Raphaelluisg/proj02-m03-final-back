const Todolist = require('./../models/todolist');

class TodolistService {
    findAll = async () => await Todolist.find();

    findById = async (id) => {
        return await Todolist.findById(id);
    }

    createTodolist = async (todolist) => {
        return await Todolist.create(todolist);
    }

    editTodolist = async (id, todolist) => {
        return await Todolist.updateOne({ _id: id}, todolist);
    }
    
    deleteTodolist = async (id) => {
        return await Todolist.deleteOne({ _id: id});
    }
}


module.exports = TodolistService;