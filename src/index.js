import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sem1 from './components/Sem1';
import Sem2 from './components/Sem2';
import Sem3 from './components/Sem3';
import Sem4 from './components/Sem4';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path='/' element={<Sem1 />}/>
            <Route path='/sem1' element={<Sem1 />}></Route>
            <Route path='/sem2' element={<Sem2 />}></Route>
            <Route path='/sem3' element={<Sem3 />}></Route>
            <Route path='/sem4' element={<Sem4 />}></Route>
            <Route path='/overall' element={<App />}></Route>
        </Routes>
    <Footer/>
    </BrowserRouter>
);
