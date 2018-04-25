import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../../components';

import Gallery from './gallery.jsx';

// Add overflow: hidden to container to prevent floating squares from escaping container
const StyledPageContainer = styled(PageContainer)`overflow: hidden;`;

/* Page Component */
class VideographyPage extends React.Component {
    render() {
        return (
            <StyledPageContainer ref="pagecontainer">
                <Gallery />
            </StyledPageContainer>
        );
    }
}

export default VideographyPage;
