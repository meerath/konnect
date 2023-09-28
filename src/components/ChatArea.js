import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import './chatArea.css'
import { IconButton } from '@mui/material';
import FrndMsg from './messagesComponent/FrndMsg';
import SelfMsg from './messagesComponent/SelfMsg';
const ChatArea = ({props}) => {
  return (
    <div className='ChatArea-container'>
        <div className='chatArea-header'>
            <p className='con-icon'>s</p>
            {/* {props.name[0]} */}
            <div className='header-text'>
            <p className='con-title'>chat</p>
            {/* {props.name} */}
            <p className='con-timeStamp'>qqq</p>
            {/* {props.timeStamp} */}
        </div>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
        </div>
        <div className='msg-container'>
            <FrndMsg/>
            <SelfMsg/>
            <FrndMsg/>
            <SelfMsg/>
            <FrndMsg/>
            <SelfMsg/>
            <FrndMsg/>
            <SelfMsg/> <FrndMsg/>
            <SelfMsg/>
            <FrndMsg/>
            <SelfMsg/>
        </div>
        <div className='msg-input'>
            <input placeholder='Enter the message' className='search-box'/>
           <IconButton>
              <SendIcon />
           </IconButton>
        </div>
    </div>
  )
}
export default ChatArea
