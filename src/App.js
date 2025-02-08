
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home.js'
import LMSCaseStudy from './Components/lmsCaseStudy';
import LexTrustCaseStudy from './Components/lexTrustCaseStudy.js';
import GrowMateCaseStudy from './Components/growMateCaseStudy.js';
import MealMapCaseStudy from './Components/mealMapCaseStudy.js';

function App() {
  return (
    <div className="App">
    <Router basename="/Githmi_portfolio">
        
        <Routes>
        <Route path="/Githmi_portfolio" element={<Home />} />
        <Route path="/lmsCaseStudy" element={<LMSCaseStudy />} />
        <Route path="/lexTrustCaseStudy" element={<LexTrustCaseStudy />} />
        <Route path="/growMateCaseStudy" element={<GrowMateCaseStudy />} />
        <Route path="/mealMapCaseStudy" element={<MealMapCaseStudy />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
