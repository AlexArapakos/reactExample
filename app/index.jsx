import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header.jsx';
import App from './components/App.jsx';
import Footer from './components/Footer.jsx';

render(<Header />, document.getElementById('header'));
render(<App />, document.getElementById('app'));
render(<Footer />, document.getElementById('footer'));