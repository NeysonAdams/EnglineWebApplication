import React, { useState, useEffect ,useContext} from 'react';
import './SPNavigation.css';
import LanguageContext from '../../../context/LanguageContext' 

const SPNavigation = ({isShowMenu}) =>
{
    
    const {localData, language}  = useContext(LanguageContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
            {isShowMenu && (
            <ul className="nav__links">
                <li>
                <a className="nav__link" href="#main">{localData.nav.main}</a>
                </li>
                <li>
                <a className="nav__link" href="#about">{localData.nav.about}</a>
                </li>
                <li>
                <a className="nav__link" href="#popular">{localData.nav.popular}</a>
                </li>
                <li>
                <a className="nav__link" href="#questions">{localData.nav.questions}</a>
                </li>
            </ul>)}
            <button className="nav__button" type="button">{localData.nav.button}</button>
        </nav>
        <button className='nav__menu-button' type='button' onClick={toggleMenu}></button>
        </>
    );
}

export default SPNavigation;