import React, { useState, useEffect ,useContext} from 'react';
import './EULA.css';

import LanguageContext from '../../context/LanguageContext';

import SPHeader from '../StartPage/SPHeader/SPHeader';
import SPFooterMini from '../StartPage/SPFooter/SPFooterMini';

const EULA = ()=>{
    const { eulaData} = useContext(LanguageContext);
    return (
        <>
            <SPHeader isShowMenu={false}/>
            <main className='eula'>
                <section className='eula__header'>
                    <div className='eula__container'>
                        <h2 className='eula__title'>{eulaData.title} </h2>
                        <p className='eula__date-label'>{eulaData.label}  
                            <span className='eula__date'> {eulaData.date} </span></p>
                        <p className='eula__warning'>
                            {eulaData.warning} 
                        </p>
                    </div>
                </section>
                <section className='eula__body'>
                    <p className='eula__description'>
                        {eulaData.descr[0]}
                    </p>
                    <h3 className='eula__chater'>{eulaData.chapters[0]}</h3>
                    <p className='eula__description'>
                        {eulaData.descr[1]}
                    </p>
                    <h3 className='eula__chater'>{eulaData.chapters[1]}</h3>
                    <p className='eula__description'>
                        {eulaData.descr[2]}
                    </p>
                    <ul>
                        <li className='eula__description'> 
                            {eulaData.descr[3]}
                        </li>
                        <li className='eula__description'> 
                            {eulaData.descr[4]}
                        </li>
                        <li className='eula__description'> 
                            {eulaData.descr[5]}
                        </li>
                    </ul>
                    <h3 className='eula__chater'>{eulaData.chapters[2]}</h3>
                    <p className='eula__description'>
                        {eulaData.descr[6]}
                    </p>

                    <h3 className='eula__chater'>{eulaData.chapters[3]}</h3>
                    <p className='eula__description'>
                        {eulaData.descr[7]}
                    </p>
                    <p className='eula__description'>
                        {eulaData.descr[8]}
                    </p>

                    <h3 className='eula__chater'>{eulaData.chapters[4]}</h3>
                    <p className='eula__description'>
                        {eulaData.descr[9]}
                    </p>

                    <h3 className='eula__chater'>{eulaData.chapters[5]}</h3>
                    <p className='eula__description'>
                        {eulaData.descr[10]}
                    </p>

                    <h3 className='eula__chater'>{eulaData.chapters[6]}</h3>
                    <p className='eula__description'>
                        {eulaData.descr[11]}
                    </p>

                    <h3 className='eula__chater'>{eulaData.chapters[7]}</h3>
                    <p className='eula__description'>
                        {eulaData.descr[12]}
                    </p>

                    <h3 className='eula__chater'>{eulaData.chapters[8]}</h3>
                    <p className='eula__description'>
                        {eulaData.descr[13]}
                    </p>

                    <h3 className='eula__chater'>{eulaData.chapters[9]}</h3>
                    <p className='eula__description'>
                        {eulaData.descr[14]}
                    </p>
                    <p className='eula__description'>
                        {eulaData.descr[15]}
                    </p>

                    <h3 className='eula__chater'>{eulaData.chapters[10]}</h3>
                    <p className='eula__description'>
                        {eulaData.descr[16]}
                    </p>

                    <h3 className='eula__chater'>{eulaData.chapters[11]}</h3>
                    <p className='eula__description'>
                    {eulaData.descr[17]}
                    </p>

                    <h3 className='eula__chater'>{eulaData.chapters[12]}</h3>
                    <p className='eula__description'>
                    {eulaData.descr[18]}
                    </p>
                    <p className='eula__description'>
                    {eulaData.descr[19]}
                    </p>

                    <h3 className='eula__chater'>{eulaData.chapters[13]}</h3>
                    <p className='eula__description'>
                    {eulaData.descr[20]}
                    </p>
                    <p className='eula__description'>
                    {eulaData.descr[21]}
                    </p>
                    <p className='eula__description'>
                    {eulaData.descr[22]}
                    </p>
                    
                </section>
            </main>
            <SPFooterMini/>
        </>
    );
}

export default EULA