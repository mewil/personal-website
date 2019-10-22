import React from 'react';
import ReactDOM from 'react-dom';
import { h, div } from 'react-hyperscript-helpers';
import { Header } from './header';
import { Particles } from './particles';
import { Home } from './home';

require('es6-promise').polyfill();

const App = () => {
    return div([h(Header), h(Particles), h(Home)]);
};

ReactDOM.render(React.createElement(App), document.getElementById('app'));
