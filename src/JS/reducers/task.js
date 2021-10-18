import { ADD_TASK,DELETE_TASK, EDIT_TASK, STATUS_TASK } from "../Constants/task";

// initialState

const initialState={

    tasks:[{id:Math.random(),text:"checkpoint redux", done:false},
    {id:Math.random(),text:"checkpoint react", done:false},
    {id:Math.random(),text:"checkpoint api", done:false},
    {id:Math.random(),text:"checkpoint node", done:false},  
 ],
x : 2,
};

// pure function 

const taskReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case ADD_TASK: 
        // payload:{}
            return{...state, tasks: state.tasks.concat(payload)};

        case DELETE_TASK:
        // payload:{id}
            return{...state,tasks:state.tasks.filter((el)=>el.id !=payload),
                    };
        case EDIT_TASK: 
        // payload:{id,text}
                return{...state,tasks:state.tasks.map((el)=>el.id==payload.id? {...el,text:payload.text}:el)};
        case STATUS_TASK: 
        // payload:{id}
                return{...state, tasks:state.tasks.map((el)=>el.id==payload?{...el,done:!el.done}:el)};
        default:
            return state;
    }

};

// export 
export default taskReducer;