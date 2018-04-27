import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Header from './header.jsx';
import Background from './background.jsx';

class Navigator extends React.Component {
    render() {
        return (
            <IntlProvider locale="en">
                <ThemeProvider theme={this.props.theme}>
                    <div>
                        <Background />
                        <Header />
                        {React.Children.toArray(this.props.children)}
                    </div>
                </ThemeProvider>
            </IntlProvider>
        );
    }
}

const mapStateToProps = ({ theme }) => {
    return { theme: theme.data };
};

export default withRouter(connect(mapStateToProps)(Navigator));
