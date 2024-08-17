import { useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import './App.css'

import { LanguageProvider } from '../../context/LanguageContext'

import StartPage from '../StartPage/StartPage'
import EULA from '../EULA/EULA';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

function App() {
  const [count, setCount] = useState(0)

  return (
    <LanguageProvider>
      <Routes>
        <Route 
          exact
          path="/:lang"
          element={
            <>
              <StartPage/>
            </>
          }
        />
        <Route 
          exact
          path="/:lang/eula"
          element={
            <>
              <EULA/>
            </>
          }
        />
        <Route 
          exact
          path="/:lang/policy"
          element={
            <>
              <PrivacyPolicy/>
            </>
          }
        />
          <Route 
            exact
            path="/" 
            element={<Navigate to="/ru" replace />} 
          />
          <Route 
            exact
            path="/eula" 
            element={<Navigate to="/ru/eula" replace />} 
          />
          <Route 
            exact
            path="/policy" 
            element={<Navigate to="/ru/policy" replace />} 
          />
      </Routes>
    </LanguageProvider>
  )
}

export default App
