import React, { useState } from 'react';
import{useSelector} from "react-redux";
import Filter from '../Filter/Filter';
import Task from "./Task";

const TaskList = () => {
  const [filter, setFilter] = useState("all");

  const tasks=useSelector((state)=>state.taskReducer.tasks);
    return (
        <div>
          <Filter setFilter={setFilter}/>
          { filter=="all"?
          tasks.map ((task)=><Task task={task} key={task.id}/>
            ):filter=="done"? 
          tasks.filter((el)=>el.done==true)
          .map((task)=><Task task={task} key={task.id}/>
            ):
           tasks.filter((el)=>el.done==false)
           .map((task)=><Task task={task} key={task.id}/>)
         
    }    
        </div>
    
    );
};

export default TaskList;
