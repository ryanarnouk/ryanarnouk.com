import React from 'react'; 

import '../../styles/main.css';
import SocialIcons from '../SocialIcons';

const Landing = () => (
  <div className='landing'>
    <div className='innerlanding'>
      <div className='landingtext'>
        <h1 className='zeromargin white'>Hello, I'm <br/></h1>
        <h1 className='zeromargin red'>Ryan Arnouk</h1>
        <h3 className='teal'>An aspiring software engineer.</h3>
        <SocialIcons />
      </div>
    </div>
  </div>
)

export default Landing