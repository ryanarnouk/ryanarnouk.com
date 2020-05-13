import React from 'react';
import PropTypes from 'prop-types'; 
import Image from '../components/image';

import '../styles/navigation.css';
import '../styles/main.css';

const NavItem = ({ text, description, file}) => (
  <div className="col navitem white">
    <Image file={file} />
    <h3>{text}</h3>
    <p>{description}</p>
  </div>
);

const Navigation = () => (
  <div className="navigation">
    <div className="row">
      <NavItem text="About" description="About myself" file="about.png"/>
      <NavItem text="Publications" description="My recent blog posts" file="blog.png"/>
      <NavItem text="Projects" description="My work and side projects." file="projects.png"/>
      <NavItem text="Skills" description="Technologies I am proficient with." file="skills.png"/>
      <NavItem text="Reading" description="My reading lists." file="reading.png"/>
      <NavItem text="Contact" description="I'd love to get in contact with you." file="contact.png"/>
    </div>
  </div>
)

export default Navigation; 
