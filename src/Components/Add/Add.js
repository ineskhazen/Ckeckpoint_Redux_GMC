import React,{useState} from 'react';
import {useDispatch}from "react-redux";
import {addTask} from "../../JS/actions/task";

const Add = () => {
  const [text,setText] = useState("");
  const dispatch = useDispatch()
  
    return (
        <div>
          <input  type="text" onChange={(e)=>setText(e.target.value)}
          value={text}/>
          <button 
          onClick={()=>{dispatch(addTask({text:text, id:Math.random(), status:false}));
          setText("");
        
        }}
        >Add</button>
        </div>
    )
}

export default Add;
