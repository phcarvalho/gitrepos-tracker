import React from 'react';
import { FaGithubAlt, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import './styles.css';

const social = [
  {
    name: 'GitHub',
    url: 'https://github.com/phcarvalho',
    Icon: FaGithubAlt
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ph-carvalho/',
    Icon: FaLinkedinIn
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/phcarvalhodev',
    Icon: FaTwitter
  }
]

function Footer() {
  return (
    <div className="footer">
      <p>Made by Paulo Carvalho</p>
      <div className="social-container">
        {social.map(item => (
          <a href={item.url} key={item.name} target="blank">
            <item.Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer;