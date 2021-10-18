import React from 'react'

const Filter = ({setFilter}) => {
    return (
        <div>
            <button onClick={()=>setFilter("all")}>All</button>
            <button onClick={()=>setFilter("done")}>Done</button>
            <button onClick={()=>setFilter("undone")}>Undone</button>
        </div>
    )
};

export default Filter;
