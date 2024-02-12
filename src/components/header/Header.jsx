import React, { useState } from 'react';
import './header.css';
import { IoMdMenu } from 'react-icons/io';
import { MdClose } from 'react-icons/md';

const Header = () => {
  const [toggler, setToggler] = useState(true);

  return (
    <div className='header_container'>
      {toggler ? (
        <MdClose className='s_icon' onClick={() => setToggler(false)} />
      ) : (
        <IoMdMenu className='s_icon' onClick={() => setToggler(true)} />
      )}
      <h1>Med<span>Xakcha</span></h1>
      <button>Sign In</button>
    </div>
  );
};

export default Header;
