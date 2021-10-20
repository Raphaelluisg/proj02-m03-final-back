const express = require('express');
const TodolistsController = require('./../controllers/todolists.controller');


const todolistsController = new TodolistsController();
const router = express.Router();

//Rotas

//Para retornar todos os To dos
router.get('/', todolistsController.getTodolists);

//Retorna o to do por id
router.get('/:id', todolistsController.getTodolistsById);

router.post('/', todolistsController.createTodolist);

router.put('/:id', todolistsController.editTodolist);

router.delete('/: id', todolistsController.deleteTodolist);

module.exports = router;