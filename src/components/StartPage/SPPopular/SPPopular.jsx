import React, { useState, useEffect ,useContext} from 'react';
import './SPPopular.css';

import LanguageContext from '../../../context/LanguageContext'

import vector from "../../../static/assets/startpage/Vector.svg"
import frame from "../../../static/assets/startpage/Frame.svg"
import googleIcon from "../../../static/assets/startpage/g1237.svg"
import playIcon from "../../../static/assets/startpage//g1231.svg"

const SPPopular = ()=>
{
    const {localData, language}  = useContext(LanguageContext);
    return (
        <section id="popular" className="popular">
          <div className="popular__container">
            <h2 className="popular__title">{localData.popular.title}</h2>
            <div className="popular__grid">
              <div className="popular__card">
                <img className="popular__card-image" src={vector} alt="img"/>
                <h3 className="popular__card-title">{localData.popular.cards[0].title}</h3>
                <p className="popular__card-discription">{localData.popular.cards[0].description}</p>
              </div>
              <div className="popular__card">
                <img className="popular__card-image" src={frame}alt="img"/>
                <h3 className="popular__card-title">{localData.popular.cards[1].title}</h3>
                <p className="popular__card-discription">{localData.popular.cards[1].description}</p>
              </div>
            </div>
            <div className="popular__down-panel">
              <div className="popular__disript-container">
                <h3 className="popular__down-title">{localData.popular.downpanel.title}</h3>
                <p className="popular__down-discription">{localData.popular.downpanel.subtitle} </p>
              </div>
              <button className="main__play-button" type="button">
                <img className="main__play-icon" src={playIcon} alt="google play"/>
                <div>
                  <p className="main__dowload">Скачать в</p>
                  <img className="main__googleplay" src={googleIcon} alt="google play"/>
                </div>
              </button>
            </div>
          </div>
        </section>
    );
}

export default SPPopular;