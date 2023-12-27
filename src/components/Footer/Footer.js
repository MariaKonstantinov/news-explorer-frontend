import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import FacebookIcon from "../../images/icons/tablet__facebook-icon.svg";
import GithubIcon from "../../images/icons/github-icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          &copy; 2023 Supersite, Powered by News API
        </p>
        <nav className="footer__navigation">
          <div className="footer__links">
            <NavLink className="footer__link" to="/">
              Home
            </NavLink>
            <a
              className="footer__link"
              href="https://tripleten.com/"
              target="_blank"
              rel="noreferrer"
            >
              TripleTen
            </a>
          </div>
          <div className="footer__social">
            <a
              href="https://github.com/MariaKonstantinov"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer__icon footer__icon_type_github"
                src={GithubIcon}
                alt="Github Icon"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer__icon footer__icon_type_facebook"
                src={FacebookIcon}
                alt="Facebook Icon"
              />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
