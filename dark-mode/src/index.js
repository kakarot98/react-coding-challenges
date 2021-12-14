import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/App';
import './styles/_main.scss';
import Routes from './routes';
import { useContext } from "react";
import {  ThemeContextProvider} from './Contexts/ThemeContext'
// import  from './Contexts/ThemeContext'

ReactDOM.render(
  <AppContainer>
    <ThemeContextProvider>
    <Routes />
    </ThemeContextProvider>
  </AppContainer>,
  document.getElementById('root')
);
