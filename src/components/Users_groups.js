import './chatblock.css'
import './user_groups.css'
import './sidebar.css'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { AnimatePresence, motion } from "framer-motion"

const Users_groups = () => {
  return (
    <AnimatePresence>
       <motion.div 
       initial={{opacity:0, scale:0}}
       animate={{opacity:1, scale:1}}
       exit={{opacity:0, scale:0}}
       transition={{
        ease:"anticipate",
        duration:"0.3"

       }}
       className='list-container'>
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
          <motion.div 
          whileHover={{scale: 1.02}} 
          whileTap={{scale:0.98}}
          className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Users</p>
          </motion.div>

          <motion.div 
          whileHover={{scale: 1.02}} 
          whileTap={{scale:0.98}}
          className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Users</p>
          </motion.div>

          <motion.div 
          whileHover={{scale: 1.02}} 
          whileTap={{scale:0.98}}
          className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Users</p>
          </motion.div>

          <motion.div 
          whileHover={{scale: 1.02}} 
          whileTap={{scale:0.98}}
          className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Users</p>
          </motion.div>

          <motion.div 
          whileHover={{scale: 1.02}} 
          whileTap={{scale:0.98}}
          className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Users</p>
          </motion.div>

          <motion.div 
          whileHover={{scale: 1.02}} 
          whileTap={{scale:0.98}}
          className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Users</p>
          </motion.div>

          <motion.div 
          whileHover={{scale: 1.02}} 
          whileTap={{scale:0.98}}
          className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Users</p>
          </motion.div>

          <motion.div 
          whileHover={{scale: 1.02}} 
          whileTap={{scale:0.98}}
          className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Users</p>
          </motion.div>
          <motion.div 
          whileHover={{scale: 1.02}} 
          whileTap={{scale:0.98}}
          className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Users</p>
          </motion.div>
          <motion.div 
          whileHover={{scale: 1.02}} 
          whileTap={{scale:0.98}}
          className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test Users</p>
          </motion.div>
            
        </div>
      </motion.div>
    </AnimatePresence>
    
  
  )
}

export default Users_groups
