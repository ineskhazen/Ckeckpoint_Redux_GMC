import React, { useState } from 'react';
import { deleteTask, editTask, statusTask } from '../../JS/actions/task';
import {useDispatch} from "react-redux";
import "./Task.css";

const Task = ({task}) => {
    const [isEdit, setisEdit] = useState(false);
    const [description, setDescription] = useState(task.text);
    const dispatch = useDispatch();
    const styleText=task.done?{textDecoration:"line-through"}:null;
    const handleEdit=()=>{dispatch(editTask(task.id,description));
    setisEdit(false);};
   
    return (
        <div>
       {isEdit? (
        <div>
            <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
    
            <button onClick={handleEdit}>Submit</button>
        </div>
       )
       
       :(  <p style={styleText} className={task.done? "done":"undone"}>{task.text}</p>)

        }
            <button onClick={()=>setisEdit(!isEdit)}>Edit</button>
            <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
            <button onClick={()=>dispatch(statusTask(task.id))}>{task.done?"undone":"done"}</button>
        </div>
    )
}

export default Task;
