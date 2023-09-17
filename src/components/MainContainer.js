import React from 'react'
import './maincontainer.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
 

const MainContainer = () => {
  return (
    <div className='mainContainer'>
        <Sidebar/>
        <ChatArea/>
       
    </div>
  )
}

export default MainContainer
