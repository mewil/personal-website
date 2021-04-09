import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './header';
import { Particles } from './particles';
import { Home } from './home';

const App = () => (
    <div>
        <Header />
        <Particles />
        <Home />
    </div>
);

ReactDOM.render(React.createElement(App), document.getElementById('app'));
