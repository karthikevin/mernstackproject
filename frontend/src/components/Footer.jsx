import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>KARTHIKS</h1>
          <p>Event and Wedding</p>
        </div>
        <div className="tag">
          <label>New latter</label>
          <div>
            <input  type="text" placeholder="E-mail" />
            <button>Subscribe</button>
          </div>
          <p>Sign up with your email address to receice news and updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;