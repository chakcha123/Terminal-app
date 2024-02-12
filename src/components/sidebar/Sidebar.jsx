import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { FaTerminal, FaInfoCircle, FaEnvelope, FaBook, FaUserPlus } from 'react-icons/fa';

const Sidebar = () => {
  return (
<aside className='sidebar_container'>
 
  <Link to='/subscribe'>
    <div className='sidebar_items'>
      <FaUserPlus className='s_icon'/>
     Subscribe 
    </div>
    </Link>   

    <Link to='/about'>
      <div className='sidebar_items'>
        <FaInfoCircle className='s_icon'/>
      About Us 
      </div>
    </Link> 

    <Link to='/contact'>
      <div className='sidebar_items'>
        <FaEnvelope className='s_icon'/>
        Contact Us  
      </div>
    </Link>

    <Link to='/documentation'>
      <div className='sidebar_items'>
        <FaBook className='s_icon'/>
        Documentation
      </div>
    </Link>
    <Link to='/terminale'>
      <div className='sidebar_items'>
        <FaTerminal className='s_icon'/>
        Terminale
      </div>
    </Link>  
 
</aside>
  );
};

export default Sidebar;
