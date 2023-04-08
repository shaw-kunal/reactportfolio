import React from 'react'
import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import { Mail } from '@mui/icons-material';

const Topbar = ({open,setOpen}) => {
  return (
    <div className={"topbar " + (open && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#" className='logo'>genius.</a>
          <div className="itemContainer">
          <PersonIcon className='icon'
          />
          <span>+9123351653</span>
          </div>
          <div className="itemContainer">
          <Mail className='icon'/>
          <span>shaw@genius.com</span>t
          </div>
        </div>
        <div className="right">
        <div className="humburger" onClick={()=>setOpen(!open)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>

        </div>

      </div>
    </div>
  )
}

export default Topbar