import React, { useState, useEffect ,useContext} from 'react';
import './SPBanner.css';

import LanguageContext from '../../../context/LanguageContext' 

import bluesquare from "../../../static/assets/startpage/BannerPicture.svg"
import googleIcon from "../../../static/assets/startpage/g1237.svg"
import playIcon from "../../../static/assets/startpage//g1231.svg"

const SPBanner = ()=>
{
    const {localData, language}  = useContext(LanguageContext);
    return (
        <section className='main'> 
            <div className="main__container">
                <div className='main__info'>
                    <h1 className="main__title">{localData.main.title}</h1>
                    <p className="main__subtitle">{localData.main.subtitle}</p>
                    <button className="main__play-button" type="button">
                        <img className="main__play-icon" src={playIcon} alt="google play"/>
                        <div className='main__doload-button-container'>
                            <p className="main__dowload">{localData.main.download}</p>
                            <img className="main__googleplay" src={googleIcon} alt="google play"/>
                        </div>
                    </button>
                </div>
                <img className='main_img' src={bluesquare} alt="bluesquare" />
            </div>
        </section>
    );
}

export default SPBanner;