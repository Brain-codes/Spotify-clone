import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import SearchIcon from '@material-ui/icons/Search'

function Sidebar() {
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src={require('../images/image1.jpeg')} alt="" />
            <SidebarOption title='Home' />
            <SidebarOption title='Search' />
            <SidebarOption title='Your Library' />
            <SearchIcon/>
        </div>
    )
}

export default Sidebar
