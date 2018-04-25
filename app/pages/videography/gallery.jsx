import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { devices } from '../../styles';
import Vimeo from 'react-vimeo';

const Wrapper = styled.div`
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    zIndex: 98;
`;

const Container = styled.div`
    height: 100%;
    width: calc(100% - 60px);
    maxWidth: 1200px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${devices.tablet`
        width: calc(100% - 100px);
    `} ${devices.desktop`
        width: calc(100% - 140px);
    `} ${devices.giant`
        width: calc(100% - 160px);
    `};
`;

class Gallery extends React.Component {
    render() {
        return (
            <Wrapper>
                <Container>
                    <Vimeo videoId={248686806} autoplay={true} />
                </Container>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme.data
    };
};

export default connect(mapStateToProps)(Gallery);
