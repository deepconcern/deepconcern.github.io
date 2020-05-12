import React, { FC } from 'react';

import { useRepositories } from './repositories';

export type Props = {
    topicFilter: string,
};

export const RepositoryList: FC<Props> = ({ topicFilter }) => {
    const { error, loading, repositories } = useRepositories();

    if (error) {
        console.error(error);
        return <p>Error loading repositories</p>;
    } else if (loading) {
        return <p>Loading repositories...</p>;
    } else if (!repositories) {
        return <p>No repositories... yet!</p>;
    } else {
        const appRepositories = repositories.filter(repository => {
            return repository.topics.includes(topicFilter);
        });

        if (appRepositories.length === 0) {
            return <p>No repositories... yet!</p>;
        } else {
            return (
                <ul>
                    {appRepositories.map(repository => {
                        return (
                            <li key={repository.name}>
                                <a href={repository.url}>{repository.name}</a>
                            </li>
                        );
                    })}
                </ul>
            );
        }
    }
};
