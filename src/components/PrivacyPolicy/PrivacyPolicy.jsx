import React, { useState, useEffect ,useContext} from 'react';
import './PrivacyPolicy.css';

import LanguageContext from '../../context/LanguageContext';

import SPHeader from '../StartPage/SPHeader/SPHeader';
import SPFooterMini from '../StartPage/SPFooter/SPFooterMini';

const PrivacyPolicy = ()=>
{
    const { ppData} = useContext(LanguageContext);
    return(
        <>
            <SPHeader isShowMenu={false}/>
            <main className='policy'>
                <section className='policy__header'>
                    <div className='policy__container'>
                        <h2 className='policy__title'>{ppData.title} </h2>
                        <p className='policy__date-label'>{ppData.label}  
                            <span className='policy__date'> {ppData.date} </span></p>
                        <p className='policy__warning'>
                            {ppData.warning} 
                        </p>
                    </div>
                </section>
                <section className='policy__body'>
                    <p className='policy__description'>{ppData.chapters[0].description}</p>
                    <h3 className='policy__chapter'>{ppData.chapters[1].title}</h3>
                    <h4 className='policy__subchapter'>{ppData.chapters[1].subtitles[0].title}</h4>
                    <p className='policy__description'>{ppData.chapters[1].subtitles[0].description}</p>
                    <ul>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[1].subtitles[0].list[0].text}</span>
                        </li>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[1].subtitles[0].list[1].text}</span>
                        </li>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[1].subtitles[0].list[2].text} </span>
                            {ppData.chapters[1].subtitles[0].list[2].subtext}
                        </li>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[1].subtitles[0].list[3].text} </span>
                            {ppData.chapters[1].subtitles[0].list[3].subtext}
                        </li>
                    </ul>
                    <h4 className='policy__subchapter'>{ppData.chapters[1].subtitles[1].title}</h4>
                    <p className='policy__description'>{ppData.chapters[1].subtitles[1].description}</p>
                    <ul>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[1].subtitles[1].list[0].text} </span>
                            {ppData.chapters[1].subtitles[1].list[0].subtext}
                        </li>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[1].subtitles[1].list[1].text} </span>
                            {ppData.chapters[1].subtitles[1].list[1].subtext}
                        </li>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[1].subtitles[1].list[2].text} </span>
                            {ppData.chapters[1].subtitles[1].list[2].subtext}
                        </li>
                    </ul>

                    <h4 className='policy__subchapter'>{ppData.chapters[1].subtitles[2].title}</h4>
                    <p className='policy__description'>{ppData.chapters[1].subtitles[2].description}</p>
                    
                    <h4 className='policy__subchapter'>{ppData.chapters[1].subtitles[3].title}</h4>
                    <p className='policy__description'>{ppData.chapters[1].subtitles[3].description}</p>
                    

                    <h3 className='policy__chapter'>{ppData.chapters[2].title}</h3>
                    <p className='policy__description'>{ppData.chapters[2].description}</p>
                    <ul>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[2].list[0].text} </span>
                            {ppData.chapters[2].list[0].subtext}
                        </li>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[2].list[1].text} </span>
                            {ppData.chapters[2].list[1].subtext}
                        </li>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[2].list[2].text} </span>
                            {ppData.chapters[2].list[2].subtext}
                        </li>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[2].list[3].text} </span>
                            {ppData.chapters[2].list[3].subtext}
                        </li>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[2].list[4].text} </span>
                            {ppData.chapters[2].list[4].subtext}
                        </li>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[2].list[5].text} </span>
                            {ppData.chapters[2].list[5].subtext}
                        </li>
                    </ul>


                    <h3 className='policy__chapter'>{ppData.chapters[3].title}</h3>
                    <p className='policy__description'>{ppData.chapters[3].description}</p>
                    <ul>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[3].list[0].text} </span>
                            {ppData.chapters[3].list[0].subtext}
                        </li>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[3].list[1].text} </span>
                            {ppData.chapters[3].list[1].subtext}
                        </li>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[3].list[2].text} </span>
                            {ppData.chapters[3].list[2].subtext}
                        </li>
                    </ul>


                    <h3 className='policy__chapter'>{ppData.chapters[4].title}</h3>
                    <p className='policy__description'>{ppData.chapters[4].description}</p>
                    <ul>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[4].list[0].text} </span>
                            {ppData.chapters[4].list[0].subtext}
                        </li>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[4].list[1].text} </span>
                            {ppData.chapters[4].list[1].subtext}
                        </li>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[4].list[2].text} </span>
                            {ppData.chapters[4].list[2].subtext}
                        </li>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[4].list[3].text} </span>
                            {ppData.chapters[4].list[3].subtext}
                        </li>
                        <li className='policy__description'>
                            <span className='policy__description-extra'>{ppData.chapters[4].list[4].text} </span>
                            {ppData.chapters[4].list[4].subtext}
                        </li>
                    </ul>
                    
                    <p className='policy__description'>{ppData.chapters[4].subdescription}</p>


                    <h3 className='policy__chapter'>{ppData.chapters[5].title}</h3>
                    <p className='policy__description'>{ppData.chapters[5].description}</p>

                    <h3 className='policy__chapter'>{ppData.chapters[6].title}</h3>
                    <p className='policy__description'>{ppData.chapters[6].description}</p>

                    <h3 className='policy__chapter'>{ppData.chapters[7].title}</h3>
                    <p className='policy__description'>{ppData.chapters[7].description}</p>
                    
                    <h3 className='policy__chapter'>{ppData.chapters[8].title}</h3>
                    <p className='policy__description'>{ppData.chapters[8].description}</p>
                </section>
            </main>
            <SPFooterMini/>
        </>
    );
}

export default PrivacyPolicy;