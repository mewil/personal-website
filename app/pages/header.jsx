import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
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
    background: ${theme.primary};
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

const StyledHeaderLink = styled.a`
    font-size: 20px;
    padding: 2px 35px;
    margin: 10px 0 10px 15px;
    color: white;
    border: 1px solid transparent;
    transition: all 0.4s;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
        border: 1px solid white;
    }
`;

class Header extends React.Component {
    render() {
        return (
            <div>
                {window.location.pathname == routes.SUBSCRIBE ? null : (
                    <div>
                        <Helmet>
                            <title>Michael Wilson</title>
                        </Helmet>
                        <Wrapper>
                            <FlexWrapper>
                                <StyledHeaderLink href={routes.HOME}>
                                    Home
                                </StyledHeaderLink>
                                <StyledHeaderLink href={routes.PROJECTS}>
                                    Projects
                                </StyledHeaderLink>
                                <StyledHeaderLink href={routes.PHOTOGRAPHY}>
                                    Photography
                                </StyledHeaderLink>
                                <StyledHeaderLink href={routes.VIDEOGRAPHY}>
                                    Videography
                                </StyledHeaderLink>
                                <StyledHeaderLink href={routes.RESUME}>
                                    Resume
                                </StyledHeaderLink>
                                <StyledHeaderLink href={routes.CONTACT}>
                                    Contact
                                </StyledHeaderLink>
                            </FlexWrapper>
                        </Wrapper>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userState: state.userState,
        configurationState: state.configurationState,
        theme: state.theme.data
    };
};

export default connect(mapStateToProps)(Header);
