import { h } from 'react-hyperscript-helpers';
import styled from 'styled-components';
// import theme from './styles/theme.js';

const Container = styled.div`
    display: flex;
    alignItems: center;
    justifyContent: center;
`;

const HomeContent = () => {
    return h(Container, [h('h2', 'Michael Wilson'.toUpperCase())]);
};

export default HomeContent;
