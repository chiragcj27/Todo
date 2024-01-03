const express = require('express');
const app = express();
const { createTodo, updateTodo } = require("./types")

app.use(express.json());

app.post('/todo', function(res, req) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.statusCode(411).json({
            msg: "You sent the wrong inputs"
        })
    }

})

app.get('/todos', function(res,req) {

})

app.put("/completed", function(res,req) {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success) {
        res.statusCode(411).json({
            msg: "You sent the wrong inputs"
        })
    }
})