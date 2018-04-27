import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
    paddingTop: 15px
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
    alignItems: flex-start;
    justifyContent: flex-start;
    height: 90%;
    margin: 0 auto;

    ${devices.tablet`
        justifyContent: space-between;
    `};
`;

const StyledNavLink = styled(NavLink)`
    font-size: 20px;
    padding: 2px 35px;
    margin: 10px 0 10px 15px;
    color: ${theme.primary};
    transition: all 0.4s;
    text-decoration: none;
    text-transform: uppercase;
    border: 1px solid transparent;
    background: transparent;
    &:hover {
        border: 1px solid ${theme.primary};
        background: ${theme.secondary};
    }
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
                        <StyledNavLink to={routes.PROJECTS}>
                            Projects
                        </StyledNavLink>
                        <StyledNavLink to={routes.PHOTOGRAPHY}>
                            Photography
                        </StyledNavLink>
                        <StyledNavLink to={routes.VIDEOGRAPHY}>
                            Videography
                        </StyledNavLink>
                        <StyledNavLink to={routes.RESUME}>Resume</StyledNavLink>
                        <StyledNavLink to={routes.CONTACT}>
                            Contact
                        </StyledNavLink>
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
