import React from 'react';
import GithubIcon from '../assets/github.svg';
import LinkedinIcon from '../assets/linkedin.svg';

const SocialIcon = ({ type }) => {
  switch (type) {
    case 'linkedin':
      return <LinkedinIcon className="footer-social-icon" />;
    case 'github':
      return <GithubIcon className="footer-social-icon" />;
    default:
      return null;
  }
};

export default SocialIcon;
