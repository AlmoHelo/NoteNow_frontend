import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';
import { Header } from './layout/header/header';
import { Liste } from './Pages/Liste';
import { Routing } from './Routing/Routing';
import { Footer } from './layout/footer/footer';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Routing/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);