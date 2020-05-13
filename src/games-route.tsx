import React, { FC } from 'react';

import { RepositoryList } from './repository-list';
import { Screen } from './screen';

const GAME_TOPIC = 'game';

export const GamesRoute: FC = () => {
    return (
        <Screen>
            <section className="section">
                    <div className="container">
                        <h2 className="title">Games</h2>
                        <div className="box content">
                            <RepositoryList topicFilter={GAME_TOPIC}/>
                        </div>
                    </div>
                </section>
        </Screen>
    );
};
