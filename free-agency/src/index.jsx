import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Header from './components/Header';
import Error from './components/Error';
import Freelances from './pages/Freelances';
import Results from './pages/Results';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const r = createRoot(document.getElementById('root'));

r.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />}/>
          <Route path='survey/:questionNumber' element={<Survey />}/>
          <Route path='freelances' element={<Freelances />}/>
          <Route path='results' element={<Results />}/>
          <Route path='*' element={<Error />}/>
        </Route>
      </Routes>
    </Router>
    
  </React.StrictMode>
)
