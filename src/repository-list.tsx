import React, { FC, Fragment } from 'react';

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
        const filteredRepositories = repositories.filter(repository => {
            return repository.topics.includes(topicFilter);
        });

        if (filteredRepositories.length === 0) {
            return <p>No repositories... yet!</p>;
        } else {
            return (
                <dl>
                    {filteredRepositories.map(repository => {
                        return (
                            <Fragment key={repository.name}>
                                <dt><a href={repository.url}>{repository.name}</a></dt>
                                <dd>{repository.description}</dd>
                            </Fragment>
                        );
                    })}
                </dl>
            );
        }
    }
};
