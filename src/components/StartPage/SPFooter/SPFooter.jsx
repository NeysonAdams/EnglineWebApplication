import React, { useState, useEffect ,useContext} from 'react';
import './SPFooter.css';

import LanguageContext from '../../../context/LanguageContext'

import logo from "../../../static/assets/startpage/footer_logo.svg"
import instagramm from "../../../static/assets/startpage/mdi_instagram.svg"
import mail from "../../../static/assets/startpage/uiw_mail.svg"

const SPFooter = () => {
  const {localData, language} = useContext(LanguageContext);
    return (
        <footer className="footer">
        <div className="footer__container">
          <div className="footer__logo-container">
            <img className="footer__logo" src={logo} alt="logo"/>
            <p className="footer__subtitle">{localData.footer.subtitle}</p>
          </div>
          <div className='footer__info'>
          <nav className="footer__nav">
              <h3 className="footer__title">{localData.footer.title1}</h3>
              <ul className="footer__nav-links">
                <li>
                  <a className="footer__nav-link" href="#main">{localData.nav.main}</a>
                </li>
                <li>
                  <a className="footer__nav-link" href="#about">{localData.nav.about}</a>
                </li>
                <li>
                  <a className="footer__nav-link" href="#popular">{localData.nav.popular}</a>
                </li>
                <li>
                  <a className="footer__nav-link" href="#questions">{localData.nav.questions}</a>
                </li>
              </ul>
          </nav>
          <div className="footer__contacts">
              <h3 className="footer__title">{localData.footer.title2}</h3>
              <div className="footer__contact-label">
                <img className="footer__contact-icon" src={instagramm} alt=""/>
                <span>eletalk.uz</span>
              </div>

              <div className="footer__contact-label">
                <img className="footer__contact-icon" src={mail} alt=""/>
                <span>admin@eletalk.uz</span>
              </div>
          </div>
          </div>
        </div>
      </footer>
    );
}

export default SPFooter;