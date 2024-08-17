import React, { useState, useEffect ,useContext} from 'react';
import './SPQuestion.css';

import LanguageContext from '../../../context/LanguageContext'

const SPQuestion = ()=>{
    const {localData, language}  = useContext(LanguageContext);
    const [firstOpen, setFirst] = useState(false); 
    const [secondOpen, setSecond] = useState(false);
    const [tredOpen, setTred] = useState(false);

    const toggleFirst = () =>{
        setFirst(!firstOpen);
        setSecond(false);
        setTred(false);
    }

    const toggleSecond = () =>{
        setFirst(false);
        setSecond(!secondOpen);
        setTred(false);
    }

    const toggleTred = () =>{
        setFirst(false);
        setSecond(false);
        setTred(!tredOpen);
    }

    return (
        <section id="questions" className="questions">
            <div className="questions__content">
                <h3 className="questions__title">{localData.questions.title}</h3>
                <div className="questions__container">
                    <div id="0" 
                        className={`questions__dropdown ${firstOpen?'questions__dropdown-picked':''}` }
                        onClick={toggleFirst}>
                        <p  className="questions__label">{localData.questions.questions[0].question}</p>
                        <div className={`questions__dropdown-icon ${firstOpen?'questions__dropdown-icon-picked':''}`}></div>
                    </div>
                    <div className={`questions__dropdown-answer ${firstOpen?'questions__dropdown-answer-opened':''}`}>
                        <p  className="questions__label-answer">{localData.questions.questions[0].answer}</p>
                    </div>
                    <div id="1" className={`questions__dropdown ${secondOpen?'questions__dropdown-picked':''}` }
                    onClick={toggleSecond}>
                    <p className="questions__label">{localData.questions.questions[1].question}</p>
                    <div className={`questions__dropdown-icon ${secondOpen?'questions__dropdown-icon-picked':''}`}></div>
                    </div>
                    <div className={`questions__dropdown-answer ${secondOpen?'questions__dropdown-answer-opened':''}`}>
                    <p  className="questions__label-answer">{localData.questions.questions[1].answer}</p>
                    </div>
                    <div id="2" className={`questions__dropdown ${tredOpen?'questions__dropdown-picked':''}` }
                    onClick={toggleTred}>
                    <p className="questions__label">{localData.questions.questions[2].question}</p>
                    <div className={`questions__dropdown-icon ${tredOpen?'questions__dropdown-icon-picked':''}`}></div>
                    </div>
                    <div className={`questions__dropdown-answer ${tredOpen?'questions__dropdown-answer-opened':''}`}>
                    <p  className="questions__label-answer">{localData.questions.questions[2].answer}</p>
                    </div>
                </div>
            </div>
      </section>
    );
}

export default SPQuestion;