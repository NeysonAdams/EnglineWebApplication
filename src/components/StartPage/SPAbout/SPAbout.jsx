import React, { useState, useEffect ,useContext} from 'react';
import './SPAbout.css';

import LanguageContext from '../../../context/LanguageContext' 

const SPAbout = () =>
{
  const {localData, language}  = useContext(LanguageContext);
    return (
        <section id="about" className="about">
          <div className="about__container">
            <h2 className="about__title">{localData.about.title} <span className="about__title-ele">ELE</span></h2>
            <div className="about__grid">
              <div className="about__card">
                <h3 className="about_card-title">{localData.about.cards[0].title}</h3>
                <p className="about_card-discription">{localData.about.cards[0].description}</p>
              </div>
              <div className="about__card">
                <h3 className="about_card-title">{localData.about.cards[1].title}</h3>
                <p className="about_card-discription">{localData.about.cards[1].description}</p>
              </div>
              <div className="about__card">
                <h3 className="about_card-title">{localData.about.cards[2].title}</h3>
                <p className="about_card-discription">{localData.about.cards[2].description}</p>
              </div>
              <div className="about__card">
                <h3 className="about_card-title">{localData.about.cards[3].title}</h3>
                <p className="about_card-discription">{localData.about.cards[3].description}</p>
              </div>
            </div>
          </div>
        </section>
    );
}

export default SPAbout