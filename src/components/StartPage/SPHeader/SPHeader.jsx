import React, { useState, useEffect ,useContext} from 'react';
import './SPHeader.css';

import SPNavigation from '../SPNavigation/SPNavigation';
import logo from "../../../static/assets/startpage/header__logo.svg"

const SPHeader = ({isShowMenu=true}) =>
{
    return (
        <header className="header">
            <div className='header__container'>
                
                <img
                    className="header__logo"
                    alt="logo"
                    src={logo}
                />
                <SPNavigation isShowMenu={isShowMenu}/>
            </div>
        </header>
    );
}

export default SPHeader;