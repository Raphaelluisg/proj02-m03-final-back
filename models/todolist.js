const mongoose = require('mongoose');

const TodolistModel = new mongoose.Schema({
    text: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
    timestamp: { type: String, default: Date.now() }
})

const Todolist = mongoose.model("todolists", TodolistModel);

module.exports = Todolist;