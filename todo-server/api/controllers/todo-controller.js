import { response } from "express";
import { request } from "express";
import * as  todoService from './../services/todo-service.js';


const setErrorResponse = (error, response) => {
    response.status(500);
    response.json(error);
}

const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}
// CREATE
export const post = async (request,response) => {
    try {
        const payload = request.body;
        const contact = await todoService.save(payload); 
        setSuccessResponse(contact, response);
    }  catch (error) {
        setErrorResponse(error,response);
    }
    
}

export const index = async (request, response) => {
    try {
        console.log(request.query);
        const firstName = request.query.firstName;
        const lastName = request.query.lastName;
        const query = {};
        if (firstName) {
            query.firstName = firstName;
        }
        if (lastName) {
            query.lastName = lastName;
        }
        const contacts = await todoService.search(query);
        setSuccessResponse(contacts, response);

    } catch(error) {
        setErrorResponse(error, response);
    }
}

//READ
export const get = async (request, response) => {
    try {
        const id = request.params.id;
        const contact = await todoService.get(id);
        setSuccessResponse(contact,response);
    }catch (error) {
        setErrorResponse(error, response);
    }
}

//UPDATE
export const update = async (request, response) => {
    try {
        const id = request.params.id;
        const updated = {...request.body};
        updated.id = id;
        const contact = await todoService.update(updated);
        setSuccessResponse(contact,response);
    }catch (error) {
        setErrorResponse(error, response);
    }
}

//DELETE
export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        await todoService.remove(id);
        setSuccessResponse({message : `Successfully remove ${id}`},response);
    }catch (error) {
        setErrorResponse(error, response);
    }
}