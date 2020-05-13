import React from 'react'; 

import '../styles/footer.css'; 

const Footer = () => (
  <footer>
    <div>
      © {new Date().getFullYear()} Ryan Arnouk
    </div>
  </footer>
);

export default Footer;