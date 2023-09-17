import React from 'react'
import './selfMsg.css'

const SelfMsg = () => {
    var props2={
        name:'you',
        message:'this is sent by me',
    }
  return (
    <div className='self-msg-container'>
      <div className='messageBox'>
        <p>{props2.message}</p>
        <p className='self-timeStamp'>n12</p>

      </div>
    </div>
  )
}

export default SelfMsg
