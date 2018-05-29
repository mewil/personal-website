import { h } from 'react-hyperscript-helpers';
import styled from 'styled-components';
import Script from 'react-load-script';
import { devices } from './styles';

const Container = styled.div`
    position: 'relative';
    display: flex;
    align-self: center;
    align-items: center;
    justifyContent: center;
    margin-top: 60px;
		overflow: visible;
`;

const ParticlesContainer = styled.div`
    position: 'relative';
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 90%;
		overflow: visible;
		visibility: hidden;
		${devices.tablet`
			visibility: visible;
		`};
`;

const Particles = () => {
    return h(Container, [
        h(ParticlesContainer, '#particles-js'),
        h(Script, { url: 'particles.js' })
    ]);
};

export default Particles;
