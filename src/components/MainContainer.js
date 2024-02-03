import React from 'react'
import './maincontainer.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'
import CreateGroups from './CreateGroups'
import Users_groups from './Users_groups'
 

const MainContainer = () => {
  return (
    <div className='mainContainer'>
        <Sidebar/>
        {/* <ChatArea/> */}
        {/* <Welcome/> */}
        {/* <CreateGroups/> */}
        <Users_groups/>
       
    </div>
  )
}

export default MainContainer
