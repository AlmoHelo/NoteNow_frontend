import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';
import { Header } from './layout/header/header';
import { Liste } from './Pages/Liste';
import { Routing } from './Routing/Routing';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Routing/>
  </React.StrictMode>,
  document.getElementById('root')
);