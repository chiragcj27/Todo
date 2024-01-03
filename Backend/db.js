const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect('mongodb+srv://chiragcj27work:qOdviooDoNT0El1q@cluster0.od4gxzg.mongodb.net/todo');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    isCompleted: boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}