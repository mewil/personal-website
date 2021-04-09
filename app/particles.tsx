import styled from 'styled-components';
import { devices, GlobalStyle } from './styles';

const Container = styled.div`
    position: relative;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
`;

const ParticlesContainer = styled.div`
    width: 70%;
    height: 70%;
    position: relative;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    overflow: visible;
    visibility: hidden;
    ${devices.desktop`
        visibility: visible;
    `};
`;

export const Particles = () => (
    <Container>
        <GlobalStyle />
        <ParticlesContainer id="particles-js" />
    </Container>
);
