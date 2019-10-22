import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { div, title, h } from 'react-hyperscript-helpers';
import { routes } from './constants';
import { devices, theme } from './styles';

const Wrapper = styled.div`
    paddingtop: 10px;
    paddingbottom: 15px;
    zindex: 100;
    display: flex;
    height: 80px;
    alignitems: center;
    justifycontent: flex-start;
    background: white;
`;

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
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

export const Header = () => {
    return div([
        h(Helmet, [title('Michael Wilson')]),
        h(Wrapper, [
            h(FlexWrapper, [
                h(StyledALink, { href: routes.PROJECTS }, ['Projects']),
                h(StyledALink, { href: routes.LINKEDIN }, ['LinkedIn']),
                h(StyledALink, { href: routes.PHOTOGRAPHY }, ['Photography']),
                h(StyledALink, { href: routes.VIDEOGRAPHY }, ['Videography']),
                h(StyledALink, { href: routes.RESUME }, ['Resume']),
                h(StyledALink, { href: routes.CONTACT }, ['Contact'])
            ])
        ])
    ]);
};
