import React from 'react'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* sidebarLeft */}
      <div className='sidebarLeft'>
        <div className='sidebarIcon'>
          <img src="logo192.png" alt="" />
        </div>
        <div className='sidebarIcon'>
          <img src="logo192.png" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className='sidebarRight'>
        <div className="sidebarTop">
          <h3>discord</h3>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
