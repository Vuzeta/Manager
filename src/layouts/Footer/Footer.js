import React from 'react';
import './Footer.scss';
import github_icon from '../../assets/github_icon.svg';
import linkedIn_icon from '../../assets/linkedIn_icon.svg';
import website_icon from '../../assets/website_icon.svg';

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__description">Application was created by Mateusz Machnik</p>
      <ul className="footer__social">
        <li>
          <a href="https://github.com/Vuzeta" target="_blank">
            <img src={github_icon} alt="" width="30px" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/machnik-mateusz/" target="_blank">
            <img src={linkedIn_icon} alt="" width="30px" />
          </a>
        </li>
        <li>
          <a href="https://vuzeta.github.io/Portfolio/" target="_blank">
            <img src={website_icon} alt="" width="30px" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
