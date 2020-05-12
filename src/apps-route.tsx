import React, { FC } from 'react';

import { RepositoryList } from './repository-list';
import { Screen } from './screen';

const APP_TOPC = 'application';

export const AppsRoute: FC = () => {
    return (
        <Screen>
            <section className="section has-text-centered">
                    <div className="container content">
                        <h2 className="title">Apps</h2>
                        <RepositoryList topicFilter={APP_TOPC}/>
                    </div>
                </section>
        </Screen>
    );
};
