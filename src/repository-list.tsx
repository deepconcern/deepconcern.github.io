import React, { FC, Fragment, useContext } from 'react';

import { RepositoriesContext } from './repositories-context';

export type Props = {
    topicFilter: string,
};

export const RepositoryList: FC<Props> = ({ topicFilter }) => {
    const repositories = useContext(RepositoriesContext);

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
};
