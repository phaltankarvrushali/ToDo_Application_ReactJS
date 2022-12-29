import { query } from 'express';
import Todo from './../models/todo.js';

//Create the new todo item.
export const save = (newContact) => {
    const todo = new Todo(newContact);
    return todo.save();
}

//Return all the items
export const search = (query) => {
    const params = {...query};
    return Todo.find(params).exec();
}

//Return all the items by id
export const get = (id) => {
    return Todo.findById(id).exec();
}

// Updates an existing todo item by id
export const update = (updatedTodo) => {
    updatedTodo.modifiedDate = new Date();
    return Todo.findByIdAndUpdate(updatedTodo.id,updatedTodo).exec();
}

//Deletes an item by id
export const remove = (id) => {
    Todo.findByIdAndDelete(id).exec();
}