import React from 'react'
import './chatblock.css'
const Chatblock = ({props}) => {
  return (
    <div className='con-container'>
      <p className='con-icon'>{props.name[0]}</p>
      <p className='con-title'>{props.name}</p>
      <p className='con-lastMsg'>{props.lastMsg}</p>
      <p className='con-timeStamp'>{props.timeStamp}</p>
    </div>
  )
}

export default Chatblock

