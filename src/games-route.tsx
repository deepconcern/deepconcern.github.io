import React, { FC } from 'react';

import { RepositoryList } from './repository-list';
import { Screen } from './screen';

const GAME_TOPIC = 'game';

export const GamesRoute: FC = () => {
    return (
        <Screen>
            <section className="section has-text-centered">
                    <div className="container content">
                        <h2 className="title">Games</h2>
                        <RepositoryList topicFilter={GAME_TOPIC}/>
                    </div>
                </section>
        </Screen>
    );
};
