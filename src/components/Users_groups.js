import './chatblock.css'
import './user_groups.css'
import './sidebar.css'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

const Users_groups = () => {
  return (
    <div className='list-container'>
      <div className='ug-header'>
        <img/>
        <p className='ug-title'>Online users</p>
      </div>
      <div className='sb-search'>
        <IconButton>
            <SearchIcon/>
        </IconButton>
        <input placeholder='Search' className="search-box"/>
        </div>
        <div className="ug-list">
          <div className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Users</p>
          </div>
            
        </div>
      </div>
  
  )
}

export default Users_groups
