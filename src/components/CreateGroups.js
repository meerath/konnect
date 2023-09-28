import React from 'react'
import './CreateGroup.css'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';import { IconButton } from '@mui/material';

const CreateGroups = () => {
  return (
    <div className='createGroup-conatiner'>
      <input placeholder='Enter the group name' className='search-box'/>
      <IconButton>
        <DoneOutlineIcon/>
      </IconButton>
      
    </div>
  )
}

export default CreateGroups
