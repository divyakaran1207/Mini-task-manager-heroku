import React from 'react'
import { useDrag } from 'react-dnd';
import "./Taskcard.css";


function TaskCard({allinfo}) {
    const [{isDragging},drag] = useDrag(()=>({
        type: "card",
        item: {info:allinfo},
        collect: (monitor)=>({
            isDragging: monitor.isDragging()
        })
    }))
    return (
        <div className="Taskcard" 
        style={{border: isDragging? "2px solid yellow" : "1px solid black"}}
        ref={drag}>
            <p><b>id:</b>{allinfo.id}</p>
            <p><b>assigned_name:</b>{allinfo.assigned_name}</p>
            <p><b>assigned_to:</b>{allinfo.assigned_to}</p>
            <p><b>created_on:</b>{allinfo.created_on}</p>
            <p><b>due_date:</b>{allinfo.due_date}</p>
            <p><b>message:</b>{allinfo.message}</p>
            <p><b>priority:</b>{allinfo.priority}</p>
        </div>
    )
}

export default TaskCard
