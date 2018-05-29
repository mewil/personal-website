import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { div, title, h } from 'react-hyperscript-helpers';
import { routes } from './constants';
import { devices } from './styles';
import theme from './styles/theme.js';

// const Favicon = require('../static/icons/logo.png');

/* Header Section */
const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    paddingTop: 10px
    paddingBottom: 15px
    zIndex: 100;
    display: flex;
    height: 80px;
    alignItems: center;
    justifyContent: flex-start;
    background: transparent;
`;

const FlexWrapper = styled.div`
    display: flex;
    alignItems: center;
    justifyContent: flex-start;
    flex-direction: column;
    height: 90%;
    margin: 0 auto;
    ${devices.tablet`
        justifyContent: space-between;
        flex-direction: row;
    `};
`;

const StyledALink = styled.a`
    font-size: 12px;
    padding: 2px 35px;
    margin: 10px 0 10px 15px;
    color: ${theme.primary};
    transition: all 0.5s;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    border: 1px solid transparent;
    background: transparent;
    &:hover {
        border: 1px solid ${theme.primary};
        background: ${theme.secondary};
    }
    ${devices.tablet`

    font-size: 20px;
        justifyContent: space-between;
        flex-direction: row;
    `};
`;

const Header = () => {
    return div([
        h(Helmet, [title('Michael Wilson')]),
        h(Wrapper, [
            h(FlexWrapper, [
                h(StyledALink, { href: routes.PROJECTS }, ['Projects']),
                h(StyledALink, { href: routes.PHOTOGRAPHY }, ['Photography']),
                h(StyledALink, { href: routes.VIDEOGRAPHY }, ['Videography']),
                h(StyledALink, { href: routes.RESUME }, ['Resume']),
                h(StyledALink, { href: routes.CONTACT }, ['Contact'])
            ])
        ])
    ]);
};

export default Header;
