import React from 'react'
import './SidebarOption.css'

function SidebarOption(props) {
    return (
        <div className="sidebarOption">
            {props.Icon && <props.Icon className="sidebarOption__icon"/>}
            {props.Icon ? <h4>{props.title}</h4> : <p>{props.title}</p>} 
            
        </div>
    )
}

export default SidebarOption
