import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className='contact_us_container'>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
        mauris vel velit tristique condimentum. Nullam vel magna eget dolor
        tincidunt consectetur. Donec euismod ligula in risus luctus feugiat.
        Mauris malesuada risus non orci cursus, auctor posuere dui aliquet.
        Nullam quis metus id leo vestibulum elementum. Quisque condimentum
        lectus a eros congue fermentum. In hac habitasse platea dictumst.
        Nulla facilisi. Nam et vulputate dui, in faucibus elit.
      </p>
      <form>
        <label>Name:</label>
        <input type='text' />
        <label>Email:</label>
        <input type='email' />
        <label>Message:</label>
        <textarea rows='4'></textarea>
        <button className='btn'>Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
