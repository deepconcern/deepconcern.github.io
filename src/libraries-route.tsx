import React, { FC } from 'react';

import { RepositoryList } from './repository-list';
import { Screen } from './screen';

const LIBRARY_TOPIC = 'library';

export const LibrariesRoute: FC = () => {
    return (
        <Screen>
            <section className="section">
                    <div className="container">
                        <h2 className="title">Libraries</h2>
                        <div className="box content">
                            <RepositoryList topicFilter={LIBRARY_TOPIC}/>
                        </div>
                    </div>
                </section>
        </Screen>
    );
};
