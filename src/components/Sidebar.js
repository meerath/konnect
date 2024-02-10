import React, { useState } from 'react';
import './sidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ConversationItems from './ConversationItems';
import Chatblock from './Chatblock';
import { useDispatch, useSelector } from 'react-redux';
import './myStyle.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import { useNavigate } from "react-router-dom";
import { toggleTheme } from '../features/themeSlice';
const Sidebar = () => {
  const navigate= useNavigate();
  const dispatch=useDispatch()
  const lightTheme= useSelector((state)=>state.themeKey);

  const [conversations, setConversations] = useState([
    {
      name: 'user1',
      lastMsg: 'hello....',
      timeStamp: '111',
    },
    {
      name: 'user2',
      lastMsg: 'hello....',
      timeStamp: '111',
    },
    {
      name: 'user3',
      lastMsg: 'hello....',
      timeStamp: '111',
    },
    {
      name: 'user4',
      lastMsg: 'hello....',
      timeStamp: '111',
    },
  ]);

  return (
    <div className='sidebar-container'>
      <div className={'sb-header'+ (lightTheme ? "":" dark")}>
        <IconButton className={'icon' +(lightTheme ? "":" dark")}>
          <AccountCircleIcon />
        </IconButton>
        <div>
          <IconButton className={(lightTheme ? "":" dark")}>
            <PersonAddIcon />
          </IconButton>
          <IconButton className={(lightTheme ? "":" dark")}
          onClick={()=>{
            navigate("groups");
          }}>
            <GroupIcon />
          </IconButton>
          <IconButton className={(lightTheme ? "":" dark")}
          onClick={()=>{
            navigate("CreateGroups")
          }}>
            <AddCircleIcon />
          </IconButton>
          <IconButton  onClick={()=>{dispatch(toggleTheme())}}>
            {lightTheme && <DarkModeIcon  className={(lightTheme ? "":" dark")} /> }
            {!lightTheme && <LightModeIcon  className={(lightTheme ? "":" dark")}/> }        
          </IconButton>
        </div>
      </div>
      <div className='sb-search'>
        <IconButton>
          <ManageSearchIcon />
        </IconButton>
        <input placeholder='search' className='search-box' />
      </div>
      <div className='sb-conversations'>
        {conversations.map((items)=>{
            return(
                <Chatblock key={items.name} props={items}/>
            )
        })}
        <ConversationItems />
      </div>
    </div>
  );
};

export default Sidebar;
