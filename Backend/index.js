const express = require('express');
const { todo } = require('./db');
const app = express();
const { createTodo, updateTodo } = require("./types")

app.use(express.json());

app.post('/todo', async function(res, req) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.statusCode(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        isCompleted: false
    })

    res.json({
        msg: "Todo created"
    })

})

app.get('/todos', async function(res,req) {
    const allTodos = await todo.find();
    res.json({allTodos});
})

app.put("/completed", async function(res,req) {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success) {
        res.statusCode(411).json({
            msg: "You sent the wrong inputs"
        })
    }

    await todo.update({
        _id: req.body.id
    }, {
        isCompleted: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
})