import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    //Title for the Todo Object
    title : {
        type: String,
        required: 'Title is required.'
    },
    description:{ 
        //Description for the Todo Object
        type: String,
        required: 'Description is required'
    },
    due_date : {
        //Duedate for the Todo Object
        type: String,
        required: 'Phone number is requried.'
    },
    time: {
        type: String,
        required: 'Deadline time is requried.'
    },
    createdDate: {
        //CreatedOn for the Todo Object
        type: Date,
        default: Date.now
    },
    modifiedDate: {
        //LastModifiedDate for the Todo Object
        type: Date,
        default: Date.now
    },
    isChecked:{
        type: Boolean,
        default: false
    }
}, {skipVersioning: true});

const model = mongoose.model('todo', Schema);

export default model;