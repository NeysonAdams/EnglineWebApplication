import React, { useState, useEffect ,useContext} from 'react';
import './StartPage.css';

import SPHeader from './SPHeader/SPHeader';
import SPBanner from './SPBanner/SPBanner';
import SPAbout from './SPAbout/SPAbout';
import SPPopular from './SPPopular/SPPopular';
import SPQuestion from './SPQuestion/SPQuestion';
import SPFooter from './SPFooter/SPFooter';

const StartPage = () =>
{
    return (
        <>
            <SPHeader/>
            <SPBanner/>
            <SPAbout/>
            <SPPopular/>
            <SPQuestion/>
            <SPFooter/>
        </>
    );
}

export default StartPage;