import React from 'react';
import PropTypes from 'prop-types'; 
import Image from '../components/image';
import { navigate } from 'gatsby';

import '../styles/navigation.css';
import '../styles/main.css';

const NavItem = ({ text, description, file, link}) => (
  <div className="col navitem white" onClick={() => navigate(link)}>
    <Image file={file} />
    <div>
      <h3>{text}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Navigation = () => (
  <div className="navigation">
    <div className="row">
      <NavItem text="About" description="About myself" file="about.png" link="/about"/>
      <NavItem text="Publications" description="My recent blog posts" file="blog.png" link="/blog"/>
      <NavItem text="Projects" description="My work and side projects." file="projects.png" link="/projects"/>
      <NavItem text="Skills" description="Technologies I am proficient with." file="skills.png" link="/skills"/>
      <NavItem text="Reading" description="My reading lists." file="reading.png" link="/reading"/>
      <NavItem text="Contact" description="I'd love to get in contact with you." file="contact.png" link="/contact"/>
    </div>
  </div>
)

export default Navigation; 
