import styled from 'styled-components';
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
    font-size: 16px;
    padding: 2px 25px;
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
        font-size: 16px;
        padding: 2px 25px;
        justifyContent: space-between;
        flex-direction: row;
    `};
    ${devices.desktop`
        font-size: 20px;
    `};
`;

export const Header = () => (
    <>
        <title>Michael Wilson</title>
        <Wrapper>
            <FlexWrapper>
                <StyledALink href={routes.PROJECTS}>Projects</StyledALink>
                <StyledALink href={routes.LINKEDIN}>LinkedIn</StyledALink>
                <StyledALink href={routes.PHOTOGRAPHY}>Photography</StyledALink>
                <StyledALink href={routes.VIDEOGRAPHY}>Videography</StyledALink>
                <StyledALink href={routes.RESUME}>Resume</StyledALink>
                <StyledALink href={routes.CONTACT}>Contact</StyledALink>
            </FlexWrapper>
        </Wrapper>
    </>
);
