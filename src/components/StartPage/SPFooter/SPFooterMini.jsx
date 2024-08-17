import React, { useState, useEffect ,useContext} from 'react';
import './SPFooterMini.css';

import LanguageContext from '../../../context/LanguageContext'

import logo from "../../../static/assets/startpage/footer_logo.svg"
import instagramm from "../../../static/assets/startpage/mdi_instagram.svg"
import mail from "../../../static/assets/startpage/uiw_mail.svg"

const SPFooterMini = ()=>
{
  const {localData, language} = useContext(LanguageContext);
  return (
    
    <footer className="mfooter">
        
        <div className="mfooter__container">
            <div className="mfooter__logo-container">
                <img className="mfooter__logo" src={logo} alt="logo"/>
                <p className="mfooter__subtitle">{localData.footer.subtitle}</p>
          </div>
          <div className="mfooter__contacts">
            <img className="mfooter__contact-icon" src={instagramm} alt="instagramm"/>
            
            <img className="mfooter__contact-icon" src={mail} alt=""/>
          </div>
        </div>
    </footer>
  );
}

export default SPFooterMini