import React from 'react';
import config from '../../config';
import './footer.css';

const Footer = () => {
  const { copyright, links, socialLinks } = config.footer;
  const date = new Date();
  const yearNow = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <span>&#169; </span>
        <span>{yearNow}</span>
        <span>{copyright}</span>
      </div>
      <nav className="footer__navBar">
        <div className="footer__links">
          {links.map(({
            id, link, button, target,
          }) => (
            <a target={target} rel="noreferrer" className="footer__link" key={id} href={link}>{button}</a>
          ))}
        </div>
        <div className="footer__social">
          {socialLinks.map(({
            id, link, icon, target,
          }) => (
            <a target={target} rel="noreferrer" className="footer__social-link" key={id} href={link}>{(icon)}</a>
          ))}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
