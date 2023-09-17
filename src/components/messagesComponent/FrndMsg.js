import React from 'react'
import './frndMsg.css'

const FrndMsg = () => {
    var props={
        name:'mera',
        message:'hello bri subs'
    }
  return (
    <div className='frnd-msg'>
        <div className='con-container'>
            <p className='con-icon'>{props.name[0]}</p>
           <div className='frnd-message-container'>
           <p className='con-title'>{props.name}</p>
            <p className='con-lastMessage'>{props.message}</p>
           </div>
        </div>
      
    </div>
  )
}

export default FrndMsg
