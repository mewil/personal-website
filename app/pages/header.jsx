import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { routes } from '../constants';
import { devices } from '../styles';
import theme from '../styles/theme.js';

// const Favicon = require('../static/icons/logo.png');
/*
    <link
        rel="icon"
        type="image/x-icon"
        href={Favicon}
    />
*/

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
    font-size: 15px;
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

class Header extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Michael Wilson</title>
                </Helmet>
                <Wrapper>
                    <FlexWrapper>
                        <StyledALink href={routes.PROJECTS}>
                            Projects
                        </StyledALink>
                        <StyledALink href={routes.PHOTOGRAPHY}>
                            Photography
                        </StyledALink>
                        <StyledALink href={routes.VIDEOGRAPHY}>
                            Videography
                        </StyledALink>
                        <StyledALink href={routes.RESUME}>
                            Resume
                        </StyledALink>
                        <StyledALink href={routes.CONTACT}>
                            Contact
                        </StyledALink>
                    </FlexWrapper>
                </Wrapper>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme.data
    };
};

export default connect(mapStateToProps)(Header);
