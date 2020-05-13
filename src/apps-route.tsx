import React, { FC } from 'react';

import { RepositoryList } from './repository-list';
import { Screen } from './screen';

const APP_TOPC = 'application';

export const AppsRoute: FC = () => {
    return (
        <Screen>
            <section className="section">
                    <div className="container">
                        <h2 className="title">Apps</h2>
                        <div className="box content">
                            <RepositoryList topicFilter={APP_TOPC}/>
                        </div>
                    </div>
                </section>
        </Screen>
    );
};
