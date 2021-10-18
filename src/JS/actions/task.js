// function that return an object =>{type, payload}

import { ADD_TASK, DELETE_TASK, EDIT_TASK, STATUS_TASK } from "../Constants/task"

// add a task

export const addTask=(newTask)=>{
    return{type: ADD_TASK,payload:newTask};
};

//delete a task
export const deleteTask=(id)=>{
    return{type: DELETE_TASK,payload: id};
};
// edit Task
export const editTask=(id,text)=>{
    return{type: EDIT_TASK,payload: {id,text}};
};

export const statusTask=(id)=>{
    return{type: STATUS_TASK,payload: id};
};
