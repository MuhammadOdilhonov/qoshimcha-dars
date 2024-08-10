import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './page/home/Home';
import Like from './components/Like/Like';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/like' element={<Like/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
