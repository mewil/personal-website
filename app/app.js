import React from 'react';
import ReactDOM from 'react-dom';
import { h } from 'react-hyperscript-helpers';
import Header from './header';
import Particles from './particles';
import HomeContent from './homecontent';

// Polyfill Promise for IE browsers
require('es6-promise').polyfill();

const App = () => {
    return h('div', [h(Header), h(Particles), h(HomeContent)]);
};

ReactDOM.render(React.createElement(App), document.getElementById('app'));
