import React from 'react'
import { MdHome } from 'react-icons/md'

const Sidebar = () => {
  return (
     
    <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll ">
<div id="sidebar-menu" className="sidebar-menu ">
<ul>
  <li className="menu-title"> 
    <span>Main</span>
  </li>
  <li className=""> 
    <a href="index.html"><MdHome/> <span>Dashboard</span></a>
  </li>


</ul>
</div>
    </div>
</div>
 
  )
}

export default Sidebar