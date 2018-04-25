import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { connect } from 'react-redux';

import reducers from './reducers';
import { routes } from './constants';
import {
    Navigator,
    HomePage,
    ProjectsPage,
    PhotographyPage,
    VideographyPage,
    ResumePage,
    ContactPage
} from './pages';

// Polyfill Promise for IE browsers
require('es6-promise').polyfill();

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
    reducers,
    undefined,
    applyMiddleware(thunkMiddleware, middleware)
);

window.s = store;

// Delay render of components until the store has rehydrated to
// preventredirects and other side effects
class AppProvider extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Navigator>
                        <Switch>
                            <Route
                                exact
                                path={routes.HOME}
                                component={HomePage}
                            />
                            <Route
                                exact
                                path={routes.PROJECTS}
                                component={ProjectsPage}
                            />
                            <Route
                                exact
                                path={routes.PHOTOGRAPHY}
                                component={PhotographyPage}
                            />
                            <Route
                                exact
                                path={routes.VIDEOGRAPHY}
                                component={VideographyPage}
                            />
                            <Route
                                exact
                                path={routes.RESUME}
                                component={ResumePage}
                            />
                            <Route
                                exact
                                path={routes.CONTACT}
                                component={ContactPage}
                            />
                            <Route component={HomePage} />
                        </Switch>
                    </Navigator>
                </ConnectedRouter>
            </Provider>
        );
    }
}

const mapStateToProps = ({ configurationState }) => {
    return { configurationState: configurationState };
};

ReactDOM.render(
    React.createElement(connect(mapStateToProps)(AppProvider), {
        store
    }),
    document.getElementById('app')
);
