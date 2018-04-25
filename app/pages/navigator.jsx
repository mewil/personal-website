import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Particles from 'react-particles-js';
import Header from './header.jsx';

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
            value: '#000000'
        },
        size: {
            value: 0
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#000000',
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
    background: 'transparent',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'auto',
    zIndex: -1
};

class Navigator extends React.Component {
    render() {
        return (
            <IntlProvider locale="en">
                <ThemeProvider theme={this.props.theme}>
                    <div>
                        <Particles
                            params={ParticlesStyle}
                            style={ContainerStyle}
                        />
                        <Header />
                        {React.Children.toArray(this.props.children)}
                    </div>
                </ThemeProvider>
            </IntlProvider>
        );
    }
}

const mapStateToProps = ({ theme }) => {
    return { theme: theme.data };
};

export default withRouter(connect(mapStateToProps)(Navigator));
