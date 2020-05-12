import React, { FC } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { AppsRoute } from './apps-route';
import { GamesRoute } from './games-route';
import { HomeRoute } from './home-route';
import { LibrariesRoute } from './libraries-route';
import { RepositoriesProvider } from './repositories';

export const App: FC = () => {
    return (
        <RepositoriesProvider>
            <HashRouter>
                    <Switch>
                        <Route exact path="/">
                            <HomeRoute/>
                        </Route>
                        <Route exact path="/apps">
                            <AppsRoute/>
                        </Route>
                        <Route exact path="/games">
                            <GamesRoute/>
                        </Route>
                        <Route exact path="/libraries">
                            <LibrariesRoute/>
                        </Route>
                    </Switch>
            </HashRouter>
                </RepositoriesProvider>
    );
};
