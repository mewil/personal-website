import React from 'react';
import { connect } from 'react-redux';
import Particles from 'react-particles-js';
import theme from '../styles/theme.js';

const ParticlesStyle = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 3500
            }
        },
        color: {
            value: `${theme.primary}`
        },
        size: {
            value: 0
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: `${theme.primary}`,
            opacity: 0.4,
            width: 1,
            shadow: {
                enable: false
            }
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    }
};

const ContainerStyle = {
    background: `${theme.secondary}`,
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'auto'
};

class Background extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return <Particles params={ParticlesStyle} style={ContainerStyle} />;
    }
}

const mapStateToProps = ({ theme }) => {
    return { theme: theme.data };
};

export default connect(mapStateToProps)(Background);
