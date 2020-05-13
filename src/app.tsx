import React, { FC } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { repositories } from "../repository-data.json";

import { AppsRoute } from './apps-route';
import { GamesRoute } from './games-route';
import { HomeRoute } from './home-route';
import { LibrariesRoute } from './libraries-route';
import { RepositoriesContext } from './repositories-context';

export const App: FC = () => {
    return (
        <RepositoriesContext.Provider value={repositories}>
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
                </RepositoriesContext.Provider>
    );
};
